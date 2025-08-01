import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import IMCResultado from './IMCResulatdo';
import { ResultadoIMC } from '../Modelos/ResultadoIMC';

export default function IMCComponente() {
  const [peso, setPeso] = useState<number>(70); // kg
  const [altura, setAltura] = useState<number>(1.70); // m
  const [resultado, setResultado] = useState<ResultadoIMC>({
    valor: 0,
    categoria: '',
  });

  useEffect(() => {
    const imc = peso / (altura * altura);
    const categoria = clasificarIMC(imc);
    setResultado({ valor: imc, categoria });
  }, [peso, altura]);

  function clasificarIMC(imc: number): string {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text>Peso: {peso} kg</Text>
      <Button title="Aumentar 1KG" onPress={() => setPeso(p => p + 1)} />
      <Button title="Disminuir 1KG" onPress={() => setPeso(p => (p > 1 ? p - 1 : p))} />

      <Text>Altura: {(altura * 100).toFixed(0)} cm</Text>
      <Button title="Aumentar 1CM" onPress={() => setAltura(a => a + 0.01)} />
      <Button title="Disminuir 1CM" onPress={() => setAltura(a => (a > 0.5 ? a - 0.01 : a))} />

      <IMCResultado resultado={resultado} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
