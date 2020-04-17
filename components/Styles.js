import {StyleSheet, Dimensions} from 'react-native';

export let styles = StyleSheet.create(
    {
        bgColor: {
            backgroundColor: '#d4d9ea',
        },
        heightFull: {
            height: Dimensions.get("window").height
        },
        defaultFont: {
            fontSize: 30,
        },
        containerCenter: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        form: {
            backgroundColor: '#84c6ff',
            width: Dimensions.get("window").width * 0.8,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 50,
            paddingBottom: 50,
            borderRadius: 20
        },
        formInput:{
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: 'white'
        }
    },
);
