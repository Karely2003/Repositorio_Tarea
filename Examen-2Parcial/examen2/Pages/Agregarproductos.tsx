import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import {productos} from '../Modelos/productos'
import * as ImagePicker from 'expo-image-picker'
import { Picker } from '@react-native-picker/picker'


export default function Agregarproductos() {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [estado, setEstado] = useState<'Disponible' | 'No disponible'>('Disponible')
    const [categoria, setCategoria] = useState<'calzado' | 'vestidos' | 'accsesorios'>('calzado')
    const [urlfotografia, setUrlfotografia] = useState('')

    async function agregarProducto() {
        let producto: productos = {
            idProductos: 0,
            nombre,
            descripcion,
            precio: parseFloat(precio),
            estado,
            categoria,
            urlfotografia
        }

        const respuesta = await fetch('http://localhost:5000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })

        const respuestaApi = await respuesta.json()

        if (respuestaApi) {
           Alert.alert('Producto agregado')
        } else {
           Alert.alert('ocurrio un error')
        }

    }

        async function fototomar() {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 1
            })

            if (!result.canceled){
                const uri = result.assets[0].uri
                setUrlfotografia(uri)
                Alert.alert('fotografia tomada')

            }
                
            
        }




  return (
    <View>
        <Text>Agregar Producto</Text>

            <TextInput placeholder='Nombre'
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>

            <TextInput placeholder='Descripción'
                value={descripcion}
                onChangeText={setDescripcion}
            ></TextInput>

            <TextInput placeholder='Precio'
                value={precio}
                onChangeText={setPrecio}
                keyboardType='numeric'
            ></TextInput>

            <Text>Selecciona Estado</Text>
                <Picker selectedValue={estado} onValueChange={(value) => setEstado(value)}>
                    <Picker.Item label="Disponible" value="Disponible"></Picker.Item>
                    <Picker.Item label="No disponible" value="No disponible" ></Picker.Item>
                </Picker>

            <Text>Selecciona Categoria</Text>
            <Picker selectedValue={categoria} onValueChange={(value) => setCategoria(value)}>
                <Picker.Item label="Calzado" value="calzado" />
                <Picker.Item label="Vestidos" value="vestidos" />
                <Picker.Item label="Accesorios" value="accsesorios" />
            </Picker>

            


            <Button title="foto item" onPress={fototomar}></Button>

                {urlfotografia && (
                <Image source={{ uri: urlfotografia }} style={{ width: 200, height: 200, marginVertical: 10 }}></Image>
                )}
            <Button title='guardar' onPress={agregarProducto}></Button>
            
    </View>
  )
}