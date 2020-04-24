import {View, Button, Text, ScrollView, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles';
import {RNCamera} from 'react-native-camera';
import ImageEditor from "@react-native-community/image-editor";
import ImgToBase64 from 'react-native-image-base64';
import {Image} from 'react-native';

class CameraPage extends Component {

    constructor() {
        super();
        this.state = {
            url: '',
            base64: null,
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
                        // rectOfInterest={{x: 0, y: 0, width: 1, height: 0.3}}
                        // cameraViewDimensions = {{width:Dimensions.get("window").width, height: Dimensions.get("window").width*0.3}}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.auto}
                        autoFocus={true}
                    />
                </View>
                <View style={styles.snapButton}>
                    <Button onPress={this.takePicture.bind(this)} title={'Отправить'}/>
                </View>
                {this.state.base64 ? <Image style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").width * 0.3,
                    resizeMode: "center",
                    borderWidth: 1,
                    borderColor: 'red'
                }} source={{uri: "data:image/jpeg;base64," + this.state.base64}}/> : <Text/>}

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
            let newWidth = data.width * 0.78;
            ImageEditor.cropImage(data.uri, {
                offset: {x: (data.width - newWidth) / 2, y: 0},
                size: {width: newWidth, height: newWidth * 0.3},
                displaySize: {width: newWidth, height: newWidth * 0.3}
            }).then((res) => {
                console.log(res);
                ImgToBase64.getBase64String(res)
                    .then(base64String => {
                        this.setState({base64: base64String}, this.sendToApi)
                    });
            });
            // this.setState({base64: data.base64, url: data.uri});
        }
    };

    checkResult() {
        let res = this.state.response.replace(/[^0-9]/g, '');
        if (res.length > 0) {
            this.props.navigation.navigate('ConfirmPage', {res: res})
        }
    }

    makeResponseStr(response) {
        let str = '';
        let page = JSON.parse(response)['results'][0]['results'][0]['textDetection']['pages'][0];
        if ('blocks' in page) {
            page['blocks'].forEach(
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
        } else {
            str = 'Ничего не найдено'
        }
        return str;
    }

    sendToApi() {
        this.setState({response: 'loading'})
        let body = JSON.stringify({
            "analyze_specs": [{
                "content": this.state.base64,
                "mime_type": "image/jpeg",
                "features": [{
                    "type": "TEXT_DETECTION",
                    "text_detection_config": {
                        "language_codes": ["ru", "en"],
                        "model": "line"
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
            .then((response) => this.setState({response: this.makeResponseStr(response)}, this.checkResult))//.results[0].results
    }
}

export default CameraPage;
