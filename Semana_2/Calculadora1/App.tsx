import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculoEjercicio from './Components/CalculoEjercicio';

export default function App() {
  
  let semanaEjercicio: number[] = [3, 0, 2, 4.5, 0, 3, 1];
  let objetivoDiario = 6;

  return (
    <View style={styles.container}>
      <Text>My Primera aplicación en React Native</Text>

      <CalculoEjercicio horasDiarias={semanaEjercicio} objetivo={objetivoDiario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
