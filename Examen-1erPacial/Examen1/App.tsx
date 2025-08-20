import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BotondeNavegacion from './Componentes/BotondeNavegacion'
import { useContextTransferencia } from '../../provider/ProviderTransferencia'
import ProviderTransferencia from './provider/ProviderTransferencia';






export default function App() {
  return (
    <ProviderTransferencia>
      <BotondeNavegacion />
    </ProviderTransferencia>
  );
}
