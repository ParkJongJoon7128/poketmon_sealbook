import { React, useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen'
import CollectionScreen from "./CollectionScreen"
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = ({ navigation }) => {

    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [hasMediaLibraryPermission, setMediaLibraryPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            const { status2 } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            setMediaLibraryPermission(status2 === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    /* called to take the pic*/
    const takePicture = async () => {
        if (cameraRef) {
            console.log("in the pic");
            let options = {
                quality: 1,
                base64: true,
                exif: false
            }
            try {
                let { uri } = await cameraRef.current.takePictureAsync(options);
                const asset = await MediaLibrary.createAssetAsync(uri);
                navigation.navigate('CollectionScreen', {uri: asset?.uri})
                console.log(asset);
                return asset;
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (

        <View style={styles.container}>
            <Camera style={styles.camera}
                type={type}
                ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <View style={styles.flip}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}
                        >
                            <Text style={styles.text}> Flip </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Shot}>
                        <TouchableOpacity style={styles.button} onPress={
                            () => {
                                takePicture()
                                //const r = await takePicture();
                                //console.log(r.uri)
                            }} >
                            <Text style={styles.text}> Shot </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10
    },
    flip: {
    },
    Shot: {
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
});

export default CameraScreen;