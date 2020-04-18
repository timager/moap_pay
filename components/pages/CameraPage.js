import {View, Button,TouchableOpacity,Text } from 'react-native';
import React, {PureComponent} from 'react';
import {styles} from '../Styles'
import { RNCamera } from 'react-native-camera';

class CameraPage extends PureComponent {
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
                <View style={styles.snapButton}>
                    <Button onPress={this.takePicture.bind(this)} title={"Отправить"}/>
                </View>
            </View>
        );
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { base64: true };
            await this.camera.takePictureAsync(options);
        }
    };
}

export default CameraPage;
