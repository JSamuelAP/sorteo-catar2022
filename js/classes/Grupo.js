import Tabla from "./Tabla.js";

class Grupo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Grupo";
  }

  static hayConfederacionesRepetida(grupos) {
    let hayRepetidas = false;

    grupos.forEach((grupo) => {
      // Obtener las 4 confederaciones de las selecciones de cada grupo
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

      // Contar el número de veces que cada confederación aparece en cada grupo
      confederaciones.forEach((confederacion) => {
        contadores[confederacion]++;
      });

      // Si hay más de dos selecciones de la UEFA, se está violando la regla
      // También si hay más de una selección de las confederaciones restantes
      const { UEFA, CONMEBOL, CONCACAF, AFC, CAF } = contadores;
      if (UEFA > 2 || CONMEBOL > 1 || CONCACAF > 1 || AFC > 1 || CAF > 1) {
        hayRepetidas = true;
      }
    });

    return hayRepetidas;
  }
}

export default Grupo;
