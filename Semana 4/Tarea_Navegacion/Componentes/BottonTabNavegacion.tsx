import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AgregarTareas from '../Pages/agregarTareas/AgregarTareas'
import ListaTareas from '../Pages/ListaTareas/ListaTareas'
import Home from '../Pages/Home/Home'
import Buscador from '../Pages/Buscador/Buscador'

export default function BottonTabNavegacion() {

 const tab= createBottomTabNavigator()

  return (
    
    <NavigationContainer>
        <tab.Navigator>
             <tab.Screen name='Home' component={Home}></tab.Screen>
             <tab.Screen name='AgregarTareas' component={AgregarTareas}></tab.Screen>
             <tab.Screen name='ListaTareas' component={ListaTareas}></tab.Screen>
             <tab.Screen name='Buscador' component={Buscador}></tab.Screen>

        </tab.Navigator>
    </NavigationContainer>
  )
}