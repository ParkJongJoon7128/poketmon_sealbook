import { React } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-web';
import RNPickerSelect from 'react-native-picker-select';

const CollectionScreen = () => {
    return (
        <View>
            <Image style={{
                width: 350,
                height: 300
            }}>
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

            <Button title="사진 저장" />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CollectionScreen;