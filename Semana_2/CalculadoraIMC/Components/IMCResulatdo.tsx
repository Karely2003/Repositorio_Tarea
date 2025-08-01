import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ResultadoIMC } from '../Modelos/ResultadoIMC';

interface Props {
  resultado: ResultadoIMC;
}

export default function IMCResultado({ resultado }: Props) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>IMC: {resultado.valor.toFixed(2)}</Text>
      <Text style={styles.texto}>Clasificación: {resultado.categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
