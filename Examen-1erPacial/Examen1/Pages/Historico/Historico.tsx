import { View, Text } from 'react-native'
import React from 'react'
import { useContextTransferencia } from '../../provider/ProviderTransferencia'


export default function Historico() {
  const { transferencias } = useContextTransferencia();
  return (
    <View>
      <Text>Total de transacciones: {transferencias.length}</Text>
      {transferencias.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  )
}




