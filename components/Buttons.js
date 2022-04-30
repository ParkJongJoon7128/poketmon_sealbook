import { React } from 'react';
import { StyleSheet, View, Button } from 'react-native';

function Buttons() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.buttonArea}>
                <Button title="사진 찍기" style={styles.Button} />
                <Button title="수집품 보러가기" style={styles.Button} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    buttonArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
        margin: 65,
        padding: 15
    }

});

export default Buttons;