import React, { useState, useEffect, useContext } from 'react';
import { Estudiante } from '../Models/Estudiante';
import { estudianteContext } from '../Context/EstudianteContext';
import { Plantilla } from '../Models/Plantilla';

const datosIniciales: Estudiante[] = [
  { id: '1', name: 'Juan' },
  { id: '2', name: 'María' },
  { id: '3', name: 'Carlos' },
  { id: '4', name: 'Lucía' },
  { id: '5', name: 'Pedro' },
  { id: '6', name: 'Ana' },
  { id: '7', name: 'Luis' },
  { id: '8', name: 'Sandra' },
  { id: '9', name: 'Miguel' },
  { id: '10', name: 'Tania' },
];

export default function EstudianteProvider({ children }: Plantilla) {
  const [listaEstudiantes, setListaEstudiantes] = useState<Estudiante[]>([]);

  const agregarEstudiante = (est: Estudiante) => {
    setListaEstudiantes([...listaEstudiantes, est]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setListaEstudiantes(datosIniciales);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <estudianteContext.Provider value={{ listaEstudiantes, agregarEstudiante }}>
      {children}
    </estudianteContext.Provider>
  );
}

export function useEstudianteContext() {
  return useContext(estudianteContext);
}
