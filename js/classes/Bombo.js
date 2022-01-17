import Tabla from "./Tabla.js";
import { aleatoriosSinRepetir } from "../funciones.js";
import { grupos } from "../funciones.js";

class Bombo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Bombo";
  }

  static sortear(bombos) {
    // El primer elemento es la primera selección del bombo 1
    // Es decir, Catar por ser anfitrion estara en el primer grupo
    const aleatorios = [0, ...aleatoriosSinRepetir(1, 7)];

    // Llenar cada cabeza de grupo con una seleccion aleatoria del bombo 1
    // El cabeza de grupo se refiere a la primera posición del grupo
    for (let i = 0; i <= 7; i++) {
      grupos[i].selecciones[0] = bombos[0].selecciones[aleatorios[i]];
    }

    // Llenar los 3 lugares restantes de cada grupo
    for (let i = 1; i <= 3; i++) {
      const aleatorios = [...aleatoriosSinRepetir(0, 7)];
      for (let j = 0; j <= 7; j++) {
        grupos[j].selecciones[i] = bombos[i].selecciones[aleatorios[j]];
      }
    }
  }
}

export default Bombo;
