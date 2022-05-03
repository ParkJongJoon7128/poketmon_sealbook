import { React, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

<<<<<<< HEAD
=======
    const takePicture = () => {
        if (Camera) {
            Camera.takePictureAsync().then(onPictureSaved);
        }
    };

    const onPictureSaved = ({ uri, width, height, exif, base64 }) => {
        console.log(uri);
    }

>>>>>>> 7c8a88c19a2e40a3d8c53462e5254bb9a053bc97
    return (

        <View style={styles.container}>
            <Camera style={styles.camera}
                type={type}>
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
                        <TouchableOpacity style={styles.button} >
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
    flip:{ 
    },
    Shot:{
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
    },
});

export default CameraScreen;