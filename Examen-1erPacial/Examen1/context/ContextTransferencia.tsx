import { View, Text } from 'react-native'
import React from 'react'
import { createContext } from "react"
import { Transferencias } from '../Models/Transferencias'

export const ContextTransferencia=createContext({
  saldo: 10000,
  transferencias: [] as Transferencias [],
  depositar: () => {},
  transferir: (Monto: string, NumeroCuenta: string, NombreDestinatario: string) => {}
}) 
  
