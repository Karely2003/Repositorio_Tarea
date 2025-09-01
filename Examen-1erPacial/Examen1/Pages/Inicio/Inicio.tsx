import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useContextTransferencia } from '../../provider/ProviderTransferencia'

export default function Inicio() {
  const { saldo, depositar, transferencias } = useContextTransferencia();

  return (
    <View>
      <Text>Bienvenido Greysi</Text>
      <Text>Saldo Actual: L.{saldo}</Text>
      <Button title="Depositar L.500" onPress={depositar} />
      <Text>Transacciones:</Text>
      <FlatList
        data={transferencias}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
