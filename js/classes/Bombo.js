import Tabla from "./Tabla.js";
import { aleatoriosSinRepetir } from "../funciones.js";
import { grupos } from "../app.js";
class Bombo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Bombo";
  }

  sortear() {
    switch (this.getID) {
      case 1:
        this.#sortearBombo1();
        break;
      case 2:
        this.#sortearBombo2();
        break;
      case 3:
        this.#sortearBombo3();
        break;
      case 4:
        this.#sortearBombo4();
        break;
    }
  }

  #sortearBombo1() {
    // El primer elemento es la primera selección del bombo 1
    // Es decir, Catar por ser anfitrion estara en el primer grupo
    const aleatorios = [0, ...aleatoriosSinRepetir(1, 7)];

    // Llenar cada cabeza de grupo con una seleccion aleatoria del bombo 1
    // El cabeza de grupo se refiere a la primera posición del grupo
    for (let i = 0; i <= 7; i++) {
      grupos[i].selecciones[0] = this.selecciones[aleatorios[i]];
    }
  }
  #sortearBombo2() {}
  #sortearBombo3() {}
  #sortearBombo4() {}
}

export default Bombo;
