import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useContextTransferencia } from '../../provider/ProviderTransferencia'

export default function Transferencias() {
    const { saldo, transferir } = useContextTransferencia()
    const [cuenta, setCuenta] = useState('')
    const [nombre, setNombre] = useState('')
    const [monto, setMonto] = useState('')

    function realizarTransferencia() {
        const montoNum = parseFloat(monto);
        if (transferir(montoNum, `Transferencia de L.${montoNum} a ${nombre}`)) {
        Alert.alert('Transferencia exitosa');
        } else {
        Alert.alert('No cuenta con el saldo para completar la transaccion');
        }
    }

    return (
        <View>
        <Text>Transferencias</Text>
        <TextInput placeholder="Número de cuenta" value={cuenta} onChangeText={setCuenta} />
        <TextInput placeholder="Nombre del destinatario" value={nombre} onChangeText={setNombre} />
        <TextInput placeholder="Monto a transferir" value={monto} onChangeText={setMonto} keyboardType="numeric" />
        <Button title="Transferir Saldo" onPress={realizarTransferencia} />
        </View>
    )
}



