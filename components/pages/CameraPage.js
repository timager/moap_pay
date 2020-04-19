import {View, Button, TouchableOpacity, Text, ImageBackground} from 'react-native';
import React, {PureComponent} from 'react';
import {styles} from '../Styles';
import {RNCamera} from 'react-native-camera';

class CameraPage extends PureComponent {

    constructor() {
        super();
        this.state = {
            url: ''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    captureAudio={false}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    autoFocus={true}
                />
                <ImageBackground source={this.state.url} style={styles.image}>
                    <View style={styles.snapButton}>
                        <Button onPress={this.takePicture.bind(this)} title={'Отправить'}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    takePicture = async () => {
        if (this.camera) {
            const options = {base64: true};
            let url = await this.camera.takePictureAsync(options);
            this.setState({url: url});
        }
    };
}

export default CameraPage;
