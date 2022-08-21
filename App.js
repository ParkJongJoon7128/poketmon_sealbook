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
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
        <Stack.Screen name="SelectPoketmonScreen" component={SelectPoketmonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;