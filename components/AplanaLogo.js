import React, {Component} from "react";
import {Image} from 'react-native';
import aplana_digital from './assets/aplana_digital.png';

class AplanaLogo extends Component {
    render() {
        let style = [{width: 160, height: 40, marginTop: 50}];
        if(this.props.style){
            style.push(this.props.style);
        }
        return (
            <Image style={style}
                   source={aplana_digital}/>);
    }
}

export default AplanaLogo;
