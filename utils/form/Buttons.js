import { React } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Buttons = (props) => (
    <TouchableOpacity
        {...props}
        style={
            props.type === 1 ? styles.Button : styles.CustomButton
        }
    />
)

const styles = StyleSheet.create({
    Button: {
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 26,
        borderRadius: 15,
        backgroundColor: "#67CBF8",
    },
    CustomButton: {
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'android' ? 15 : 65,
        backgroundColor: "#67CBF8",
    }
});

export default Buttons;