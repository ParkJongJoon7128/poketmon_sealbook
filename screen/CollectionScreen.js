import { React } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CollectionScreen = () => {
    return (
        <View>
            <Image style={{
                width: 350,
                height: 300
            }}
                source={require('../image/dog.png')}>
            </Image>

            <Text>
                저장할 포켓몬 종족을 지정해주세요
            </Text>

            <RNPickerSelect>
                items={[
                    { label: 'n1', value: 'n1' },
                    { label: 'n2', value: 'n2' },
                    { label: 'n3', value: 'n3' },
                ]}
            </RNPickerSelect>

            <TouchableOpacity>
                <Text>
                    사진 저장
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CollectionScreen;