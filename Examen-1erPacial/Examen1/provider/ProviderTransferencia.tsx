import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { Transferencias } from '../Models/Transferencias'
import { ContextTransferencia } from '../context/ContextTransferencia'

interface plantilla{
    children:ReactNode
}

export default function ProviderTransferencia({children}:plantilla) {
    
const [saldo, setSaldo] = useState(10000);
  const [transferencias, setTransferencias] = useState<string[]>([]);

  function depositar() {
    setSaldo(prev => prev + 500);
    setTransferencias(prev => [...prev, 'Deposito de L.500']);
  }

  function transferir(monto: number, descripcion: string) {
    if (monto <= saldo) {
      setSaldo(prev => prev - monto);
      setTransferencias(prev => [...prev, descripcion]);
      return true;
    }
    return false;
  }

  return (
    <ContextTransferencia.Provider value={{ saldo, transferencias, depositar, transferir }}>
      {children}
    </ContextTransferencia.Provider>
  );
}

export function useContextTransferencia() {
  return useContext(ContextTransferencia);
}
