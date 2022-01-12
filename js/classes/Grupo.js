import Tabla from "./Tabla.js";

class Grupo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Grupo";
  }

  static hayConfederacionesRepetida(grupos) {
    let hayRepetidas = false;

    grupos.forEach((grupo) => {
      const confederaciones = grupo.selecciones.map(
        (seleccion) => seleccion.confederacion
      );

      const contadores = {
        UEFA: 0,
        CONMEBOL: 0,
        CONCACAF: 0,
        AFC: 0,
        CAF: 0,
      };

      confederaciones.forEach((confederacion) => {
        contadores[confederacion]++;
      });

      const { UEFA, CONMEBOL, CONCACAF, AFC, CAF } = contadores;
      if (UEFA > 2 || CONMEBOL > 1 || CONCACAF > 1 || AFC > 1 || CAF > 1) {
        hayRepetidas = true;
      }
    });
    return hayRepetidas;
  }
}

export default Grupo;
