import { createContext } from "react";
import { Carta } from "../Models/Carta";

export const juegoContext = createContext({
  cartas: [] as Carta[],
  partidas: [] as string[],
  iniciarJuego: () => {},
  seleccionarCarta: (id: number) => {},
});