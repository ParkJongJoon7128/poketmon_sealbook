import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { database } from "../firestoreconfig";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import "react-native-gesture-handler";
import MainScreen from "./MainScreen";
import CameraScreen from "./CameraScreen";
import SelectPoketmonScreen from "./SelectPoketmonScreen";
import RNPickerSelect from "react-native-picker-select";
import Buttons from "../utils/form/Buttons";

const CollectionScreen = () => {
  const placeholder = "포켓몬을 지정해주세요!";
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState([]);

  const getPoketmonsterApiAsync = async () => {
    try {
      const response = require(`../db/poketname-korean.json`);
      setData(
        response.map((item) => {
          return {
            key: item.id,
            label: item.name,
            value: item.num,
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  //firestore로 사진과 포켓몬 데이터 가져오기
  const showPoketmon = async () => {
    try {
      const result = {
        ...data[data.findIndex((item) => item.value === selectData)]};
      const q = query(collection(database, "pocketmon-category"), where("id", "==", result.key));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().uri);
        [sampleData.src] = doc.data().uri;
      });

    } catch (error) {
      console.log(error);
    }
  };

  // //firestore로 사진과 포켓몬 데이터 보내고 저장하기
  // const savePoketmon = async () => {
  //   try {
  //     const result = {
  //       ...data[data.findIndex((item) => item.value === selectData)],
  //     };
  //     const docRef = await addDoc(collection(database, "pocketmon-category"), {
  //       id: result.key, // 포켓몬 고유의 pk값
  //       name: result.label, // 포켓몬 이름
  //       uri: uri, // 사진 uri
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // //firestore로 사진과 포켓몬 데이터 읽어오기
  // const savePoketmon = async () => {
  //   const docRef = collection(database, "pocketmon-category");
  //     try {
  //     const result = {
  //       ...data[data.findIndex((item) => item.value === selectData)],
  //     };
  //     const test = query(docRef, where("id", "==", result.key));
  //   } catch (error) {

  //   }
  // };

  useEffect(() => {
    getPoketmonsterApiAsync();
  }, []);

  const sampleData = [
    {
      id: "1",
      text: "ex1",
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    },
    {
      id: "2",
      text: "ex2",
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    },
    {
      id: "3",
      text: "ex3",
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    },
    {
      id: "4",
      text: "ex4",
      src: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    },
  ];

  const renderData = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
      }}
    >
      <TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: item.src }} style={styles.tinyImage} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectPoketmonTitle}>
        <Text>포켓몬 종족을 지정해주세요.</Text>
      </View>

      <View style={styles.selectPoketmonPicker}>
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

      <View style={styles.buttonsStyle}>
        <Buttons onPress={() => showPoketmon()} type={2}>
          <Text>포켓몬 선택</Text>
        </Buttons>
      </View>

      <View>
        <FlatList
          ListHeaderComponent={
            <View style={styles.selectPoketmonImageCountTitle}>
              <Text></Text>
              <Text>펄기아 총 개수: 32</Text>
            </View>
          }
          data={sampleData}
          renderItem={renderData}
          keyExtractor={(data) => data.id}
          style={{ margin: 10 }}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  selectPoketmonTitle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginTop: 55,
  },
  selectPoketmonPicker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  selectPoketmonImageCountTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 65,
  },
  tinyImage: {
    width: 100,
    height: 100,
  },
  buttonsStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CollectionScreen;
