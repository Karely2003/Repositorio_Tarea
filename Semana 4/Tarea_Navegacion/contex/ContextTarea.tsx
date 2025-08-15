import { createContext } from "react";
import { Tarea } from "../Modelos/Tarea";

export const contextTarea=createContext({
    tarea: [] as Tarea[],
    agregarTareas:(tarea:Tarea) =>{}
})