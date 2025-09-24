import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { productos } from '../Modelos/productos'

export default function ListarProductos() {
    const [ListaProductos, setListaPrductos] = useState<productos[]>([])

    async function listaProductos() {

        const response = await fetch('http://localhost:5000/productos',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const listado = await response.json()
        setListaPrductos(listado)
        
    }

    useEffect(()=> {
        listaProductos()

    },[]);

    useEffect(()=>{
        console.log(ListaProductos)
    },[listaProductos])

  return (

    
    <View>
      <Text>Listado de Productos</Text>
      {

        
        listaProductos.length === 0 ? (
          <Text>Información cargando</Text>
        ) 
          : (
                    <FlatList
                        data={ListaProductos}
                        keyExtractor={(item) => item.idProductos.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 20, padding: 10, borderBottomWidth: 1 }}>
                                <Text>Nombre: {item.nombre}</Text>
                                <Text>Descripcion: {item.descripcion}</Text>
                                <Text>Precio: L. {item.precio.toFixed(2)}</Text>
                                <Text>Estado: {item.estado}</Text>
                                <Text>Categoria: {item.categoria}</Text>

                                {item.urlfotografia && (
                                    <Image
                                    source={{ uri: item.urlfotografia }}
                                    style={{ width: 150, height: 150, marginTop: 10, borderRadius: 8 }}
                                    ></Image>
                                )}
                            </View>
                        )}

                    >

                    </FlatList>
               )
            }
        </View>
    )
}
    
    