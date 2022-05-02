import { React } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CollectionScreen = () => {
    return (
        <View style={styles.View}>
            <Image style={styles.Image}
                source={require('../image/dog.png')}>
            </Image>

            <Text style={styles.Text}>
                저장할 포켓몬 종족을 지정해주세요
            </Text>
            <View style={styles.View2}>
            <RNPickerSelect
                style={styles.PickerSelect}
                onValueChange={(value) => console.log(value)}
                items={[
                    { key:'n1', label: 'n1', value: 'n1' },
                    { key:'n2', label: 'n2', value: 'n2' },
                    { key:'n3', label: 'n3', value: 'n3' },
                ]}/>
            </View>
            

            <TouchableOpacity
            style={styles.Button}>
                <Text>
                    사진 저장
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    View: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    Image: {
        margin: 60,
        width: 350,
        height: 300,
    },
    Text: {
        fontSize: 18,
    },
    View2: {
        marginTop: 50,
        fontSize: 32,
    },
    Button:{
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 65,
        backgroundColor: "#67CBF8",
    }
});

export default CollectionScreen;