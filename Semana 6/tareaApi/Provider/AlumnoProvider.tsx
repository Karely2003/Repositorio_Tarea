import React, { useState, useEffect } from "react";
import { contextAlumno } from "../context/AlumnoContext"
import { Alumno } from "../Modelos/Alumno"
import { Alert } from "react-native"

export const AlumnoProvider = ({ children }: { children: React.ReactNode }) => {
  const [listaAlumno, setListaAlumno] = useState<Alumno[]>([]);

  
  const listarAlumnos = async () => {
    const response = await fetch("http://192.168.0.7:5000/alumno", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json()
    setListaAlumno(data)
  }

  
  const agregarAlumno = async (alumno: Alumno) => {
    const response = await fetch("http://192.168.0.7:5000/alumno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno),
    })

    if (response.ok) {
      Alert.alert("Alumno agregado")
      listarAlumnos();
    } else {
      Alert.alert("Error al agregar")
    }
  }


  const eliminarAlumno = async (id: number) => {
    const response = await fetch(`http://192.168.0.7:5000/alumno/${id}`, {
      method: "DELETE",
    })

    if (response.ok) {
      Alert.alert("Alumno eliminado");
      listarAlumnos();
    } else {
      Alert.alert("Error al eliminar");
    }
  }

  useEffect(() => {
    listarAlumnos();
  }, [])

  return (
    <contextAlumno.Provider
      value={{ listaAlumno, listarAlumnos, agregarAlumno, eliminarAlumno }}
    >
      {children}
    </contextAlumno.Provider>
  )
}
