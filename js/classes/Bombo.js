import Tabla from "./Tabla.js";
class Bombo extends Tabla {
  constructor(id, selecciones) {
    super(id, selecciones);
    this.tipo = "Bombo";
  }
}

export default Bombo;
