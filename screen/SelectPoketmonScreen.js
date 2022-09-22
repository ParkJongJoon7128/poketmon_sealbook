import { React, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import {
  NavigationContainer,
  useNavigationState,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { database } from "../firestoreconfig";
import { collection, addDoc } from "firebase/firestore";
import MainScreen from "./MainScreen";
import CameraScreen from "./CameraScreen";
import CollectionScreen from "./CollectionScreen";
import RNPickerSelect from "react-native-picker-select";
import Buttons from "../utils/form/Buttons";

const SelectPoketmonScreen = ({ navigation, route }) => {
  const { uri } = route.params;
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  // const pocketmonInfo = useRef();
  const placeholder = "포켓몬을 지정해주세요!";

  const getPoketmonsterApiAsync = async () => {
    try {
      const response = require(`../db/poketname-korean.json`);
      setData(
        response.map((item) => {
          return {
            key: item.id, // 각 포켓몬 고유값
            label: item.name, // 각 포켓몬 이름
            value: item.num, // 각 포켓몬 숫자(=총 포켓몬이 몇마리인지 구분하기 위해 표시함)
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  //firestore로 사진과 포켓몬 데이터 보내고 저장하기
  const savePoketmon = async () => {
    try {
      const result = {...data[data.findIndex((item)=> item.value === selectData)]};
      const docRef = await addDoc(collection(database, "pocketmon-category"), {
          id : result.key, // 포켓몬 고유의 pk값
          name : result.label, // 포켓몬 이름
          uri: uri // 사진 uri
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    getPoketmonsterApiAsync();
  }, []);

  return (
    <View style={styles.View}>
      <Image style={styles.Image} source={{ uri: uri }}></Image>

      <Text style={styles.Text}>저장할 포켓몬 종족을 지정해주세요</Text>
      <View style={styles.View2}>
        <RNPickerSelect
          style={styles.PickerSelect}
          placeholder={{
            label: placeholder,
          }}
          fixAndroidTouchableBug={true}
          useNativeAndroidPickerStyle={false}
          onValueChange={(key) => setSelectData(key)}
          items={data}
        />
      </View>

      <Buttons
        onPress={() =>
          savePoketmon().then(navigation.navigate("CollectionScreen"))
        }
        type={2}
      >
        <Text>사진 저장</Text>
      </Buttons>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: Platform.OS === "android" ? 15 : 50,
    fontSize: 32,
  },
  PickerSelect: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SelectPoketmonScreen;
