import { React, useState, useEffect } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen'
import CameraScreen from "./CameraScreen"
import CollectionScreen from "./CollectionScreen"
import RNPickerSelect from 'react-native-picker-select';

const SelectPoketmonScreen = ({ navigation, route }) => {

    const { uri } = route.params;
    const [data, setData] = useState([]);
    const placeholder = "포켓몬을 지정해주세요!"

    const getPokectmonsterApiAsync = async () => {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=1126"
            );
            const json = await response.json();
            const { results } = json;
            const temp = results.map((item) => {
                const { name } = item
                return {
                    key: name,
                    label: name,
                    value: name
                }
            })
            setData(temp);
            navigation.navigate('CollectionScreen')
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPokectmonsterApiAsync();
    }, []);

    return (
        <View style={styles.View}>
            <Image style={styles.Image}
                source={{ uri: uri }}>
            </Image>

            <Text style={styles.Text}>
                저장할 포켓몬 종족을 지정해주세요
            </Text>
            <View style={styles.View2}>
                <RNPickerSelect
                    style={styles.PickerSelect}
                    placeholder={{
                        label: placeholder,
                    }}
                    fixAndroidTouchableBug={true}
                    useNativeAndroidPickerStyle={false}
                    onValueChange={(value) => console.log(value)}
                    items={data} />
            </View>


            <TouchableOpacity
                style={styles.Button}
                onPress={getPokectmonsterApiAsync}>
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
        marginTop: Platform.OS === 'android' ? 15 : 50,
        fontSize: 32,
    },
    Button: {
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: Platform.OS === 'android' ? 15 : 65,
        backgroundColor: "#67CBF8",
    },
    PickerSelect: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default SelectPoketmonScreen;