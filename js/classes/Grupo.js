import Tabla from "./Tabla.js";
class Grupo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Grupo";
  }
}

export default Grupo;
