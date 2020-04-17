import {View, Text, Button, TextInput} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'

class LoginPage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor,styles.containerCenter]}>
                <View style={styles.form}>
                    <TextInput style={styles.formInput} placeholder={"Логин"}/>
                    <TextInput style={styles.formInput} placeholder={"Пароль"}/>
                    <Button title={"Войти"} onPress={()=>{}}/>
                </View>
            </View>
        );
    }
}

export default LoginPage;
