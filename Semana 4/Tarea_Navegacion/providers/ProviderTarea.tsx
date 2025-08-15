import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { Tarea } from '../Modelos/Tarea'
import {contextTarea} from '../contex/ContextTarea'

interface plantilla{
    children:ReactNode
}

export default function ProviderTarea({children}:plantilla) {
  const [tarea,setTarea]=useState<Tarea[]>([]);

  function agregarTareas(tarea:Tarea){
    setTarea(item=>[...item,tarea])
  }


  return (
    <contextTarea.Provider value={{tarea,agregarTareas}}>
        {children}
    </contextTarea.Provider>
  )
}

export function useContextTarea(){
    return useContext(contextTarea)
}