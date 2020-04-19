import {StyleSheet, Dimensions} from 'react-native';

const lightBlue = '#d4d9ea';

export let styles = StyleSheet.create(
    {
        bgColor: {
            backgroundColor: lightBlue,
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
        buttonsList: {
            flex: 1,
            flexDirection: 'column'
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
        formInput: {
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: 'white'
        },
        mb20: {
            marginBottom: 20
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: lightBlue,
        },
        camera: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        snapButton:{
            alignItems:'center',
            marginVertical:50,
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
    },
);
