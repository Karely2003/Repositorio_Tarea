import { View, Text } from 'react-native'
import React from 'react'
import { useContextTarea } from '../../providers/ProviderTarea';

export default function ListaTareas({route} :any) {

    const {idAlumno,nombreAleumno} =route.params;

    const {tarea}=useContextTarea()

  return (
    <View>
      <Text>Id Alumno : {idAlumno}</Text>
      <Text>Nombre Alumno : {nombreAleumno}</Text>

      {
        tarea.map((item)=>(
          <View key={item.id}>
                <Text>ID {item.id}</Text>
                <Text>Nombre {item.nombreTarea}</Text>
          </View>
    
        ))
      }
    </View>
  )
}