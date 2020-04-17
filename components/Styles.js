import {StyleSheet, Dimensions} from 'react-native';

export let styles = StyleSheet.create(
    {
        bgBlue: {
            backgroundColor: '#95a0e8',
        },
        heightFull:{
            height: Dimensions.get("window").height
        },
        defaultFont:{
            fontSize: 30,
        }
    },
);
