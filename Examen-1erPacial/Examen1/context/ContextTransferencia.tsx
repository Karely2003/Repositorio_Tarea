import { View, Text } from 'react-native'
import React from 'react'
import { createContext } from "react"
import { Transferencias } from '../Models/Transferencias'

export const ContextTransferencia=createContext({
    saldo:10000
    transferencia: [] as Transferencias[],
    depositar:(Monto:string) => {},
    transferir: (monto: number, cuenta: string, destinatario: string) => {}

}) 
  
