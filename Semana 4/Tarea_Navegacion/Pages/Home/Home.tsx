import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navegacion= useNavigation()

    function navegarListaTareas(){
        navegacion.navigate('ListaTareas', {
            idAlumno:2,
            nombreAleumno:'Pedro'
        })
    }
  return (
    <View>
      <Text>Pagina Home</Text>
      <Button title='Ir a la lista de atreas' onPress={navegarListaTareas}></Button>
    </View>
  )
}