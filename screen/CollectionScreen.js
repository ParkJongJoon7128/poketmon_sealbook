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
import { collection, getDocs } from "firebase/firestore";
import "react-native-gesture-handler";
import MainScreen from "./MainScreen";
import CameraScreen from "./CameraScreen";
import SelectPoketmonScreen from "./SelectPoketmonScreen";
import RNPickerSelect from "react-native-picker-select";

const CollectionScreen = () => {
  const placeholder = "포켓몬을 지정해주세요!";
  const [data, setData] = useState([]);

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

  // const querySnapshot = await getDocs(collection(db, “아까 미리 만들어둔 스토어 최상단 경로? ”));

  //   console.log(querySnapshot);

  // 문서 원본 =

  // import { collection, getDocs } from "firebase/firestore";

  const querySnapshot = async () => {
    await getDocs(collection(db, "users"));
  }
  
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

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
          onValueChange={(value) => console.log(value)}
          items={data}
        />
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
});

export default CollectionScreen;
