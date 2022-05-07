import { React } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";
import MainScreen from './MainScreen'
import CameraScreen from "./CameraScreen"

const Stack = createStackNavigator();


const CollectionScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            Hello CollectionScreen
        </Text>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CollectionScreen;