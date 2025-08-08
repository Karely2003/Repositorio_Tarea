import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JuegoProvider from "./Provider/JuegoProvider";
import JuegoComponent from "./Component/JuegoComponent";
import Partida from "./Component/Partida";


export default function App() {
  return (
    <JuegoProvider>
      <View style={styles.container}>
        <JuegoComponent />
        <Partida />
      </View>
    </JuegoProvider>
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
