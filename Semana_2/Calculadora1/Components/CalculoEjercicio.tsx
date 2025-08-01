import { View, Text } from 'react-native';
import React from 'react';
import { Exercise } from '../Modelos/Exercise';

interface Parametros {
  horasDiarias: number[];
  objetivo: number;
}

export default function CalculoEjercicio(props: Parametros) {
  function calculateExercises(horas: number[], objetivo: number): Exercise {
    const cantidadDias = horas.length;
    const diasEntrenados = horas.filter(h => h > 0).length;
    const promedio = horas.reduce((sum, h) => sum + h, 0) / cantidadDias;
    const cumplioObjetivo = promedio >= objetivo;

    let calificacion = 1;
    let descripcion = 'Necesitas mejorar tu constancia.';

    if (promedio >= objetivo && promedio < objetivo + 1) {
      calificacion = 2;
      descripcion = 'Buen esfuerzo, casi perfecto.';
    } else if (promedio >= objetivo + 1) {
      calificacion = 3;
      descripcion = 'Excelente, superaste tu meta.';
    }

    return {
      cantidadDias,
      diasEntrenados,
      objetivo,
      promedioHoras: promedio,
      cumplioObjetivo,
      calificacion,
      descripcion
    };
  }

  const resultado = calculateExercises(props.horasDiarias, props.objetivo);

  return (
    <View>
      <Text>Resultados del Ejercicio</Text>
      <Text>Dias en la semana: {resultado.cantidadDias}</Text>
      <Text>Dias entrenados: {resultado.diasEntrenados}</Text>
      <Text>Objetivo diario: {resultado.objetivo}</Text>
      <Text>Promedio semanal: {resultado.promedioHoras.toFixed(2)}</Text>
      <Text>¿Cumplio el objetivo?: {resultado.cumplioObjetivo ? 'Si' : 'No'}</Text>
      <Text>Calificacion (1-3): {resultado.calificacion}</Text>
      <Text>Descripcion: {resultado.descripcion}</Text>
    </View>
  );
}
