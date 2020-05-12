import React, {Component} from "react";
import {Text, TouchableNativeFeedback, View, Image} from "react-native";
import {styles} from "./Styles";
import camera from "./assets/camera.png";

class CustomButton extends Component {
    render() {
        let disabled = !!this.props.disabled;
        let buttonStyle = [styles.button]
        if (disabled) {
            buttonStyle.push(styles.bgGrey);
        } else if (this.props.backgroundColor) {
            buttonStyle.push({backgroundColor: this.props.backgroundColor});
        }
        let img = <></>;
        let textViewStyle = {flex: 6, alignItems: 'center'};
        if (this.props.cameraImg) {
            img = <View style={{flex: 3, alignItems: 'center'}}>
                <Image style={{width: 25, height: 25}} source={camera}/>
            </View>;
            textViewStyle.alignItems = 'flex-end';
        }
        return (
            <TouchableNativeFeedback
                disabled={disabled}
                onPress={this.props.onPress}>
                <View style={[buttonStyle, {flexDirection: 'row'}]}>
                    <View style={textViewStyle}>
                        <Text style={[styles.buttonText]}>
                            {this.props.text}
                        </Text>
                    </View>
                    {img}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default CustomButton;
