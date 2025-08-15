import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AgregarTareas from '../Pages/agregarTareas/AgregarTareas'
import ListaTareas from '../Pages/ListaTareas/ListaTareas'
import { NavigationContainer } from '@react-navigation/native'

export default function StackNavegacion() {

  const stak= createStackNavigator()
  return (

    <NavigationContainer>
              <stak.Navigator>
        <stak.Screen name='AgregarTareas' component={AgregarTareas}></stak.Screen>
        <stak.Screen name='ListaTareas' component={ListaTareas}></stak.Screen>
    </stak.Navigator>

    </NavigationContainer>
  
  )
}