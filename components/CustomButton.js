import React, {Component} from "react";
import {Text, TouchableNativeFeedback, View} from "react-native";
import {styles} from "./Styles";

class CustomButton extends Component{
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default CustomButton;
