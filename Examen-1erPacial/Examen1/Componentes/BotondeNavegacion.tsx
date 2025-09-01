import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from '../Pages/Inicio/Inicio'
import Historico from '../Pages/Historico/Historico'
import Transferencias from '../Pages/Transferencias/Transferencias'


export default function BotondeNavegacion() {
    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>

        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Inicio}></Tab.Screen>
            <Tab.Screen name="Transferencias" component={Transferencias}></Tab.Screen>
            <Tab.Screen name="Historico" component={Historico}></Tab.Screen>
        </Tab.Navigator>

    </NavigationContainer>

  )
}