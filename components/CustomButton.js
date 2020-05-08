import React, {Component} from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import {styles} from "./Styles";

class CustomButton extends Component{
    render() {
        let buttonStyle = [styles.button]
        if(this.props.backgroundColor){
            buttonStyle.push({backgroundColor: this.props.backgroundColor});
        }
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                <View style={buttonStyle}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default CustomButton;
