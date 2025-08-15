import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useContextTarea } from '../../providers/ProviderTarea'
import { Tarea } from '../../Modelos/Tarea'

export default function AgregarTareas() {

  const {agregarTareas,tarea}=useContextTarea()
  const [valueText, setValueText]=useState<string>('')

  function agregarListaTarea(texto:string){
      let tarea:Tarea={
        id: Date.now(),
        nombreTarea:texto
      }

      agregarTareas(tarea);

      Alert.alert('Tarea agregafa correctamente')
  }

  useEffect(()=>{
    console.log('Tamano del arreglo', tarea.length, tarea)
  },[tarea])
  return (
    <View>
      <TextInput placeholder='Agregar Nombre Tarea'
        value={valueText}
        onChangeText={setValueText}

      ></TextInput>

      <Button title='Agregar Tarea' onPress={()=>agregarListaTarea(valueText)}></Button>
    </View>
  )
}