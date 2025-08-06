import React from 'react';
import { View, Text } from 'react-native';
import { useEstudianteContext } from '../Provider/EstudianteProvider';

export default function ListadoEstudiantes() {
  const { listaEstudiantes } = useEstudianteContext();

  return (
    <View>
      <Text>Listado de estudiantes:</Text>
      {listaEstudiantes.map((est) => (
        <Text key={est.id}>{est.name}</Text>
      ))}
    </View>
  );
}
