import {View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import React, {PureComponent} from 'react';
import {styles} from '../Styles';
import {RNCamera} from 'react-native-camera';
import ImageEditor from "@react-native-community/image-editor";
import ImgToBase64 from 'react-native-image-base64';

class CameraPage extends PureComponent {

    constructor() {
        super();
        this.state = {
            url: '',
            base64: '',
            response: "wait"
        }
    }


    render() {
        return (
            <View>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        captureAudio={false}
                        // ratio={"1:1"}
                        // rectOfInterest={{x: 0, y: 0.25, width: 1, height: 0.3}}
                        // cameraViewDimensions = {{width:500, height: 500}}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.front}
                        flashMode={RNCamera.Constants.FlashMode.auto}
                        autoFocus={true}
                    />
                </View>
                <ImageBackground source={this.state.url} style={styles.image}>
                    <View style={styles.snapButton}>
                        <Button onPress={this.takePicture.bind(this)} title={'Отправить'}/>
                    </View>
                </ImageBackground>
                <ScrollView style={styles.h200}>
                    <Text style={styles.bgColor}>{this.state.response}</Text>
                </ScrollView>
            </View>
        );
    }

    takePicture = async () => {
        if (this.camera) {
            const options = {
                base64: true,
                quality: 0.5,
                fixOrientation: true,
                exif: true
            };
            let data = await this.camera.takePictureAsync(options);
            ImageEditor.cropImage(data.uri, {
                offset: {x: 0, y: data.height * 0.8},
                size: {width: data.width, height: data.height * 0.2},
                displaySize: {width: data.width, height: data.height * 0.2}
            }).then((res) => {
                console.log(res);
                ImgToBase64.getBase64String(res)
                    .then(base64String => {
                        console.log(base64String)
                    });
                this.setState({url: res});
            });
            this.setState({base64: data.base64, url: data.uri});
        }
    };

    makeResponseStr(response) {
        let str = '';
        JSON.parse(response)['results'][0]['results'][0]['textDetection']['pages'][0]['blocks'].forEach(
            function (block) {
                block['lines'].forEach(
                    function (line) {
                        line['words'].forEach(
                            function (word) {
                                str += word['text'];
                            }
                        );
                        str += " \n "
                    }
                )
            }
        );
        return str;
    }

    sendToApi() {
        this.setState({response: 'loading'})
        let body = JSON.stringify({
            "analyze_specs": [{
                "content": this.state.base64,
                "features": [{
                    "type": "TEXT_DETECTION",
                    "text_detection_config": {
                        "language_codes": ["ru"]
                    }
                }]
            }]
        });
        fetch(
            'https://vision.api.cloud.yandex.net/vision/v1/batchAnalyze',
            // 'https://webhook.site/3a023efd-471a-4b85-bf93-952ed0c10f26',
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Api-Key AQVN30U4ze8tyv3Khw3fZ-IKU3LghOHwd5fwKic_"
                },
                body: body
            }
        )
            .then((response) => response.text())
            .then((response) => this.setState({response: this.makeResponseStr(response)}))//.results[0].results
    }
}

export default CameraPage;
