import {View, Text, Button} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'

class LoginPage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgBlue]}>
                <Button style={styles.defaultFont} title={"123"}/>
            </View>
        );
    }
}

export default LoginPage;
