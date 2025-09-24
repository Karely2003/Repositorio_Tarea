import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Agregarproductos from '../Pages/Agregarproductos'
import ListarProductos from '../Pages/ListarProductos';

export default function Navegacion() {
    const tab= createBottomTabNavigator();
  return (

        <NavigationContainer>
             <tab.Navigator>
                  <tab.Screen name='Agregar producto' component={Agregarproductos}></tab.Screen>
                 <tab.Screen name='Detalle producto' component={ListarProductos}></tab.Screen>
                
             </tab.Navigator>
        </NavigationContainer>
    
  )
}