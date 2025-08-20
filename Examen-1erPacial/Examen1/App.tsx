import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BotondeNavegacion from './Componentes/BotondeNavegacion'

export default function App() {
  return (

    <BotondeNavegacion></BotondeNavegacion>

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
