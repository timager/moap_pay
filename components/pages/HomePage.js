import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'

class HomePage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor,styles.containerCenter]}>
                <Text>Привет!</Text>
            </View>
        );
    }
}

export default HomePage;
