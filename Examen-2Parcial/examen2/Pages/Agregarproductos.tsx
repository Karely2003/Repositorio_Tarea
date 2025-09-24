import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, {useState} from 'react'
import {productos} from '../Modelos/productos'

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

        const respuesta = await fetch('http://192.168.0.7:5000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })

        const respuestaApi = await respuesta.json()

        if (respuestaApi) {
           Alert.alert('Producto agregado correctamente')
        } else {
           Alert.alert('Ocurrió un error al agregar el producto')
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

        <TextInput placeholder='Estado (Disponible / No disponible)'
            value={estado}
            onChangeText={(text) => setEstado(text === 'No disponible' ? 'No disponible' : 'Disponible')}
        ></TextInput>

        <TextInput placeholder='Categoría (calzado / vestidos / accsesorios)'
            value={categoria}
            onChangeText={(text) => {
              if (['calzado', 'vestidos', 'accsesorios'].includes(text)) {
                setCategoria(text as any)
            }
            }
        }
        ></TextInput>

        <TextInput placeholder='URL de fotografía'
            value={urlfotografia}
            onChangeText={setUrlfotografia}
        ></TextInput>

         <Button title='Agregar Producto' onPress={agregarProducto}></Button>
    </View>
  )
}