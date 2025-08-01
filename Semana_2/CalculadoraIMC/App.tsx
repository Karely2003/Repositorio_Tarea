import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IMCComponente from '../CalculadoraIMC/Components/IMCComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora de IMC</Text>
      <IMCComponente />
      <StatusBar style="auto" />
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
