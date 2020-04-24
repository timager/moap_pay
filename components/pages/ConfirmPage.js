import {View, Text, Button, TextInput} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../Styles';

class ConfirmPage extends Component {
    render() {
        return (
            <View style={[styles.heightFull, styles.bgColor,styles.containerCenter,styles.buttonsList]}>
                <TextInput style={[styles.formInput,{width:200,textAlign:'center'}]} value={this.props.route.params.res}/>
                <Button title={"Подтвердить"} onPress={()=>this.props.navigation.navigate("HomePage")}/>
            </View>
        );
    }
}

export default ConfirmPage;
