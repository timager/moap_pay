import {StyleSheet, Dimensions} from 'react-native';

const lightBlue = '#d4d9ea';
const green = '#2f9f43';

export let styles = StyleSheet.create(
    {
        colorGreen:{
            color: green
        },
        cameraPage: {
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: Dimensions.get('window').height * 0.1,
        },
        confirmPage: {
            paddingTop: Dimensions.get('window').height * 0.2,
            paddingLeft: 15,
            paddingRight: 15,
        },
        confirmOkImage: {
            alignItems: 'center',
            paddingTop: 30
        },
        loginPage: {
            paddingTop: Dimensions.get('window').height * 0.2,
            alignItems: 'center',
            backgroundColor: 'white',
            height: Dimensions.get("window").height,
        },
        homePage: {
            backgroundColor: 'white',
            paddingLeft: 15,
            paddingRight: 15,
            flex: 1,
            flexDirection: 'column',
            height: Dimensions.get("window").height
        },
        homePageLogo: {
            paddingTop: Dimensions.get("window").height * 0.2,
            paddingBottom: Dimensions.get("window").height * 0.1,
            alignItems: 'center',
        },
        smileImage: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").width * 0.6,
        },
        h200: {
            height: 100,
        },
        bgColor: {
            backgroundColor: 'white',
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
            backgroundColor: 'white',
            width: Dimensions.get("window").width * 0.9,
            paddingTop: 50,
            paddingBottom: 50,
            borderRadius: 20
        },
        formInput: {
            textAlign: 'center',
            borderRadius: 30,
            paddingLeft: 20,
            marginBottom: 20,
            marginTop: 10,
            height: 50,
            backgroundColor: 'rgba(127,127,127,0.4)',
            color: 'white'
        },
        inputLabel: {
            fontSize: 10,
            marginLeft: 25,
            textTransform: 'uppercase'
        },
        button: {
            height: 50,
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 30,
            marginTop: 25,
            backgroundColor: green,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        mb20: {
            marginBottom: 20
        },
        container: {
            height: Dimensions.get("window").width * 0.3,
            overflow: 'hidden'
        },
        camera: {
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width
        },
        snapButton: {
            // alignItems: 'center',
            marginVertical: 10,
        },
        image: {
            // flex: 1,
            // resizeMode: "cover",
            // justifyContent: "center"
        },
    },
);
