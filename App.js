import { React } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.view1} />
      <View style={styles.view2}>
        <Buttons />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  view1:{
    flex: 3,
  },
  view2:{
    flex:2,
  },
});

export default App;