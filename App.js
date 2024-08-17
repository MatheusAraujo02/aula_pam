import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import NavegacaoBottomTab from './src/navegacao/bottomTab';
import NavegacaoDrawer from './src/navegacao/drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <  NavegacaoDrawer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey' , //#b71c1c
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 18,
   
  },
});
