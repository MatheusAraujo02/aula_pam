import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Atividade1 from './src/atv_1'; 
import Atividade_3 from './src/atv_3'; 

// import Mensagem from './src/ex_2';
// import Exemplo_3 from './src/ex_3'

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,

  },
});
