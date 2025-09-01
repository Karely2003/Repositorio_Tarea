import { createContext } from "react"
import { Alumno } from "../Modelos/Alumno"

export const contextAlumno = createContext({
  listaAlumno: [] as Alumno[],
  listarAlumnos: () => {},
  agregarAlumno: (alumno: Alumno) => {},
  eliminarAlumno: (id: number) => {}
})
