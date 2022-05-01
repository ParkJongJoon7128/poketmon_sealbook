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

    return (

        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
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
            </Camera>
        </View>




        // <Camera
        //     style={{ width: 300, height: 400 }}
        //     type={this.status.type}
        //     ref={(ref) => {
        //         this.Camera = ref;
        //     }}>
        //     <View
        //         style={{
        //             flex: 1,
        //             backgroundColor: 'transparent',
        //             flexDirection: 'row',
        //         }}>
        //         // FLIP : 전면/후면 카메라 변경 버튼,
        //         <TouchableOpacity
        //             style={{
        //                 flex: 0.5,
        //                 alignSelf: 'flex-end',
        //                 alignItems: 'center',
        //             }}
        //             onPress={ () => {
        //                 let currentState = this.state.type;
        //                 let willState =
        //                     currentState === Camera.Constants.Type.back
        //                         ? Camera.Constants.Type.front
        //                         : Camera.Constants.Type.back;
        //                 this.setState({
        //                     type: willState,
        //                 });
        //             }}
        //         >
        //             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} >
        //                 Flip
        //             </Text>
        //         </TouchableOpacity>

        //         // SNAP : 사진 촬영 버튼
        //         <TouchableOpacity
        //             style={{
        //                 flex: 0.5,
        //                 alignSelf: 'flex-end',
        //                 alignItems: 'center',
        //             }}
        //             onPress={ async () => {
        //                 if (this.Camera) {
        //                     const options = {quality: 0.5, base64: true };
        //                     let photo = await this.Camera.takePictureAsync(options);
        //                     this.setState({
        //                         photo: photo.base64,
        //                         scanning: false,
        //                         uri: photo.uri,
        //                     },
        //                     () => this.callGoogleVIsionApi(this.state.result)
        //                     );
        //                 }
        //             }
        //             }>
        //             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} >
        //                 SNAP
        //             </Text>
        //         </TouchableOpacity>
        //     </View>
        // </Camera>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraScreen;