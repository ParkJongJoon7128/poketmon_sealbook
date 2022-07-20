import { React } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from "./CameraScreen"
import CollectionScreen from "./CollectionScreen"
import Buttons from '../utils/form/Buttons';

function MainScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.full}>
            <View style={styles.view1} />
            <View style={styles.view2}>
                <Buttons 
                    onPress={() => navigation.navigate('CameraScreen')} 
                    type={1}>
                    <Text>
                        사진 찍기
                    </Text>
                </Buttons>
                <Buttons 
                    onPress={() => navigation.navigate('CollectionScreen')} 
                    type={1}>
                    <Text>
                        수집품 보러가기
                    </Text>
                </Buttons>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
    },
    view1: {
        flex: 3,
    },
    view2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 26,
        borderRadius: 15,
        backgroundColor: "#67CBF8",
    }
});

export default MainScreen;