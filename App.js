'use strict';
import React, {Component} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
import LoginPage from './components/pages/LoginPage';

// const PendingView = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'lightgreen',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <Text>Waiting</Text>
//   </View>
// );
//
// class App extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>123</Text>
//         <RNCamera
//           style={styles.preview}
//           flashMode={RNCamera.Constants.FlashMode.auto}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });
class App extends Component{
    render() {
        return (
            <LoginPage/>
        );
    }
}

export default App;
