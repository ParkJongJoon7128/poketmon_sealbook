import { React } from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";
import MainScreen from './screen/MainScreen'
import CameraScreen from "./screen/CameraScreen"
import CollectionScreen from "./screen/CollectionScreen"
import SelectPoketmonScreen from "./screen/SelectPoketmonScreen"

const Stack = createStackNavigator();

AppRegistry.registerComponent("main", () => App);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{title: '포켓몬 씰 수집북'}}/>
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{title: '사진 촬영'}}/>
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} options={{title: '포켓몬 수집함'}}/>
        <Stack.Screen name="SelectPoketmonScreen" component={SelectPoketmonScreen} options={{title: '포켓몬 선택하기'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;