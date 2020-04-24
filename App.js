import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LoginPage from './components/pages/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./components/pages/HomePage";
import CameraPage from "./components/pages/CameraPage";
import ConfirmPage from "./components/pages/ConfirmPage";

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="loginPage" component={LoginPage} options={{title:"Авторизация"}}/>
                    <Stack.Screen name="HomePage" component={HomePage} options={{title:"Главная"}}/>
                    <Stack.Screen name="CameraPage" component={CameraPage} options={{title:"Наведите на счетчик"}}/>
                    <Stack.Screen name="ConfirmPage" component={ConfirmPage} options={{title:"Проверьте данные"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
