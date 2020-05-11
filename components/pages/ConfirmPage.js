import {View, Text, Button, TextInput, Image} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles';
import CustomButton from "../CustomButton";
import AplanaLogo from "../AplanaLogo";
import circle_ok from "../assets/circle_ok.png";

class ConfirmPage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor, styles.confirmPage]}>
                <Text style={[styles.inputLabel, styles.colorGreen, {fontSize: 12}]}>Проверьте значение</Text>
                <TextInput style={[styles.formInput, styles.colorGreen]}
                    value={this.props.route.params.res}/>
                <CustomButton text={"Подтвердить"} onPress={() => this.props.navigation.navigate("HomePage")}/>
                <View style={styles.confirmOkImage}>
                    <Image style={{width: 50, height: 50}} source={circle_ok}/>
                </View>
                <View style={styles.containerCenter}>
                    <AplanaLogo/>
                </View>
            </View>
        );
    }
}

export default ConfirmPage;
