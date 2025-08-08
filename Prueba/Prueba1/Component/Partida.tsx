import { View, Text } from "react-native";
import React from "react";
import { useJuegoContext } from "../Provider/JuegoProvider";

export default function HistorialPartidas() {
  const { partidas } = useJuegoContext();

  return (
    <View style={{ marginTop: 20 }}>
      <Text>Listado de Partidas:</Text>
      {partidas.map((p, index) => (
        <Text key={index}>Partida {index + 1}: {p}</Text>
      ))}
    </View>
  );
}