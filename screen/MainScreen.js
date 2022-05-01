import { React } from 'react';
import { StyleSheet, SafeAreaView, View, Button } from 'react-native';
// import Buttons from '../components/Buttons';

function MainScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.full}>
            <View style={styles.view1} />
            <View style={styles.view2}>
            <Button title="사진 찍기" style={styles.Button} 
                        onPress={ () => navigation.navigate('CameraScreen')}/>
                <Button title="수집품 보러가기" style={styles.Button} 
                        onPress={ () => navigation.navigate('moveCollection')}/>
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
    },
});

export default MainScreen;