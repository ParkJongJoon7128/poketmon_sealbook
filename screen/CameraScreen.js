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

    // const takePicture = () => {
    //     if (this.camera) {
    //         this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    //     }
    // };

    // const onPictureSaved = photo => {
    //     console.log(photo);
    // }

    return (

        <View style={styles.container}>
            <Camera style={styles.camera}
                type={type}
                ref={(r) => {
                    camera = r
                }}>
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
                        <TouchableOpacity style={styles.button} onPress={this.takePicture}>
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
    },
    flip:{ 
    },
    Shot:{
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // marginTop:550,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraScreen;