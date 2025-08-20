import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from '../Pages/Inicio/Inicio'
import Historico from '../Pages/Historico/Historico'
import Transferencias from '../Pages/Transferencias/Transferencias'

export default function StackNavigator() {

    const stack = createStackNavigator()
  return (

    <NavigationContainer>

      <stack.Navigator>
        <stack.Screen name="Inicio" component={Inicio}></stack.Screen> 
        <stack.Screen name="Transferencias" component={Transferencias}></stack.Screen> 
        <stack.Screen name="Historico" component={Historico}></stack.Screen> 

      </stack.Navigator>

    </NavigationContainer>
  )
}