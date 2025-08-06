import { createContext } from "react";
import { Estudiante } from "../Models/Estudiante";

export const estudianteContext = createContext({
  listaEstudiantes: [] as Estudiante[],
  agregarEstudiante: (est: Estudiante) => {}
});