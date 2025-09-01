import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { Alumno } from '../Modelos/Alumno';
import { contextAlumno } from "../context/AlumnoContext";

export default function ListaAlumno() {

    const {listaAlumno, eliminarAlumno} = useContext(contextAlumno)

    return (
        <View>
            <Text>Listado de Alumnos </Text>
            {
                listaAlumno.length == 0 ? (
                    <Text>Informacion Cargando</Text>
                )
                    : (

                        <FlatList data={listaAlumno}
                            keyExtractor={(item) => item.idAlumno.toString()}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>Nombre Alumno: {item.nombreAlumno}</Text>
                                    <Text>Email Alumno: {item.emailAlumno}</Text>
                                    <Text>Cantidad Clase : {item.cantidadClases}</Text>
                                      <Button title="Eliminar" onPress={() => eliminarAlumno(item.idAlumno)} />

                                </View>

                            }
                        >

                        </FlatList>
                    )
            }
        </View>
    )
}