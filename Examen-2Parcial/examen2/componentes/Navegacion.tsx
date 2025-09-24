import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Agregarproductos from '../Pages/Agregarproductos'

export default function Navegacion() {
    const tab= createBottomTabNavigator();
  return (

        <NavigationContainer>
             <tab.Navigator>
                 
                 <tab.Screen name='Agregar Alumnos' component={Agregarproductos}></tab.Screen>
             </tab.Navigator>
        </NavigationContainer>
    
  )
}