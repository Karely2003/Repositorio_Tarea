import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useJuegoContext } from "../Provider/JuegoProvider";

export default function JuegoComponent() {
  const { cartas, iniciarJuego, seleccionarCarta } = useJuegoContext();

  return (
    <View>
      <Button title="Iniciar juego" onPress={iniciarJuego} />
      <View style={styles.grid}>
        {cartas.map((carta) => (
          <TouchableOpacity
            key={carta.id}
            style={styles.card}
            onPress={() => seleccionarCarta(carta.id)}
          >
            <Text style={styles.cardText}>
              {carta.descubierta ? carta.valor : "?"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});