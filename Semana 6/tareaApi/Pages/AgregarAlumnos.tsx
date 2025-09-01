import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { Alumno } from '../Modelos/Alumno'
import { contextAlumno } from '../context/AlumnoContext'


export default function AgregarAlumnos() {

    const [nombreAlumno, setNombreAlumno] = useState('')
    const [emailAlumno, setEmailAlumno] = useState('')
    const [cantidadClase, setCantidadClase] = useState('')
    
    const { agregarAlumno } = useContext(contextAlumno)

      const handleAgregar = () => {
        let alumno: Alumno = {
        idAlumno: 0,
        nombreAlumno,
        emailAlumno,
        cantidadClases: parseInt(cantidadClase),
        };
        agregarAlumno(alumno)
        setNombreAlumno("")
        setEmailAlumno("")
        setCantidadClase("")
    }


    return (
        <View>
            <Text>Agregar Alumnos</Text>

            <TextInput placeholder='Nombre de Alumno'
                value={nombreAlumno}
                onChangeText={setNombreAlumno}
            ></TextInput>

            <TextInput placeholder='Email de Alumno'
                value={emailAlumno}
                onChangeText={setEmailAlumno}
            ></TextInput>

            <TextInput placeholder='Cantidad de clase del Alumno'
                value={cantidadClase}
                onChangeText={setCantidadClase}
            ></TextInput>

            <Button title='Agregar Alumno' onPress={handleAgregar}></Button>
        </View>
    )
}