import { React } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";
import MainScreen from './screen/MainScreen'
import CameraScreen from "./screen/CameraScreen"
import CollectionScreen from "./screen/CollectionScreen"

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
      </Stack.Navigator>
      {/* <MainScreen /> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

export default App;