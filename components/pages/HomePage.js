import {View, Text, Button} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'

class HomePage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor,styles.containerCenter,styles.buttonsList]}>
                <Text style={styles.mb20}>Привет!</Text>
                <Button title={"Отправить показания"} onPress={()=>this.props.navigation.navigate("CameraPage")}/>
            </View>
        );
    }
}

export default HomePage;
