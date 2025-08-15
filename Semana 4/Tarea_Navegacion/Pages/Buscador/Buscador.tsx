import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useContextTarea } from '../../providers/ProviderTarea'


export default function Buscador() {
  const { tarea } = useContextTarea()
  const [idBuscar, setIdBuscar] = useState<string>('')
  const [resultado, setResultado] = useState<any>(null)

  function buscarTareaPorId() {
    const idNum = parseInt(idBuscar)
    const encontrada = tarea.find(item => item.id === idNum)

    if (encontrada) {
      setResultado(encontrada)
    } else {
      setResultado(null)
      Alert.alert('No se encontro una tarea con ese ID')
    }
  }

  return (
    <View>
      <Text>Buscar Tarea por ID</Text>
      <TextInput
        placeholder="Ingrese ID"
        value={idBuscar}
        onChangeText={setIdBuscar}
        keyboardType="numeric"
      />

      <Button title="Buscar" onPress={buscarTareaPorId}></Button>

      {resultado && (
        <View>
          <Text>ID: {resultado.id}</Text>
          <Text>Nombre: {resultado.nombreTarea}</Text>
        </View>
      )}
    </View>
  )
}