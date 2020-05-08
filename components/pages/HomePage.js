import {Image, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles'
import AplanaLogo from "../AplanaLogo";
import CustomButton from "../CustomButton";
import smile from "../assets/smile.png";

class HomePage extends Component {
    render() {
        return (
            <View style={styles.homePage}>
                <View style={styles.homePageLogo}>
                    <AplanaLogo/>
                </View>
                <CustomButton text={"Отправить показания"}
                              backgroundColor={'red'}
                              onPress={() => this.props.navigation.navigate("CameraPage")}/>
                <Image style={styles.smileImage}
                       source={smile}/>
            </View>
        );
    }
}

export default HomePage;
