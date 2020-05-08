import {View, TextInput, Text} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'
import CustomButton from "../CustomButton";
import AplanaLogo from "../AplanaLogo";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            text: "jijbence"
        }
    }

    render() {
        return (
            <View style={styles.loginPage}>
                <View style={styles.form}>
                    <Text style={styles.inputLabel}>Логин</Text>
                    <TextInput style={styles.formInput}/>
                    <Text style={styles.inputLabel}>Пароль</Text>
                    <TextInput style={styles.formInput} secureTextEntry={true}/>
                    <CustomButton text={"Войти"} onPress={() => this.props.navigation.navigate('HomePage')}/>
                </View>
                <AplanaLogo/>
            </View>
        );
    }
}

export default LoginPage;
