import React, {Component} from "react";
import {Image} from 'react-native';
import aplana_digital from './assets/aplana_digital.png';

class AplanaLogo extends Component {
    render() {
        return (
            <Image style={{width: 160, height: 40, marginTop: 50}}
                   source={aplana_digital}/>);
    }
}

export default AplanaLogo;
