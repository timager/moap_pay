import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LoginPage from './components/pages/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./components/pages/HomePage";
import CameraPage from "./components/pages/CameraPage";
import ConfirmPage from "./components/pages/ConfirmPage";
import {Dimensions} from "react-native";

const Stack = createStackNavigator();

class App extends Component {
    render() {
        let noDisplayNavBar = {
            title: "",
            headerStyle: {
                height: 0,
            },
            headerLeft: () => <></>
        };
        let cameraPageHeaderOption = {
            title: "Наведите на счетчик",
            headerTintColor: 'white',
            headerStyle: {
                height: Dimensions.get('window').height * 0.2,
                backgroundColor: 'green',
            },
        };
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="loginPage" component={LoginPage} options={noDisplayNavBar}/>
                    <Stack.Screen name="HomePage" component={HomePage} options={noDisplayNavBar}/>
                    <Stack.Screen name="CameraPage" component={CameraPage} options={cameraPageHeaderOption}/>
                    <Stack.Screen name="ConfirmPage" component={ConfirmPage} options={noDisplayNavBar}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
