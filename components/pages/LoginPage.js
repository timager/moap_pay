import {View, Button, TextInput} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'

class LoginPage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor,styles.containerCenter]}>
                <View style={styles.form}>
                    <TextInput style={styles.formInput} placeholder={"Логин"}/>
                    <TextInput style={styles.formInput} placeholder={"Пароль"} secureTextEntry={true}/>
                    <Button title={"Войти"} onPress={()=>this.props.navigation.navigate('HomePage')}/>
                </View>
            </View>
        );
    }
}

export default LoginPage;
