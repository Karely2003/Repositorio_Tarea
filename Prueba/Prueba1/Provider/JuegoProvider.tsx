import React, { useState, useEffect, useContext } from "react";
import { Carta } from "../Models/Carta";
import { juegoContext } from "../Context/JuegoContext";
import { Plantilla } from "../Models/Plantilla";

const valores = ["A", "B", "C", "D"];

export default function JuegoProvider({ children }: Plantilla) {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [seleccionadas, setSeleccionadas] = useState<number[]>([]);
  const [partidas, setPartidas] = useState<string[]>([]);

  function iniciarJuego() {
    const duplicadas = [...valores, ...valores];
    const mezcladas = duplicadas
      .map((valor, index) => ({ id: index, valor, descubierta: false }))
      .sort(() => Math.random() - 0.5);
    setCartas(mezcladas);
    setSeleccionadas([]);
  }

  function seleccionarCarta(id: number) {
    if (seleccionadas.length === 2 || cartas[id].descubierta) return;

    const nuevasSeleccionadas = [...seleccionadas, id];
    setSeleccionadas(nuevasSeleccionadas);

    const nuevasCartas = cartas.map((carta) =>
      carta.id === id ? { ...carta, descubierta: true } : carta
    );
    setCartas(nuevasCartas);

    if (nuevasSeleccionadas.length === 2) {
      const [id1, id2] = nuevasSeleccionadas;
      const carta1 = nuevasCartas[id1];
      const carta2 = nuevasCartas[id2];

      setTimeout(() => {
        if (carta1.valor === carta2.valor) {
          alert("He ganado el Juego");
          setPartidas((prev) => [...prev, "Ganó"]);
        } else {
          alert("Las Cartas no son iguales");
          setPartidas((prev) => [...prev, "Perdio"]);
          const reiniciadas = nuevasCartas.map((carta) =>
            carta.id === id1 || carta.id === id2
              ? { ...carta, descubierta: false }
              : carta
          );
          setCartas(reiniciadas);
        }
        setSeleccionadas([]);
      }, 1000);
    }
  }

  return (
    <juegoContext.Provider
      value={{ cartas, partidas, iniciarJuego, seleccionarCarta }}
    >
      {children}
    </juegoContext.Provider>
  );
}

export function useJuegoContext() {
  return useContext(juegoContext);
}
