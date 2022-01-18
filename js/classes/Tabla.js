class Tabla {
  #id;

  constructor(id, selecciones) {
    this.#id = id;
    this.selecciones = selecciones;
    this.tipo = null;
  }

  get getID() {
    return this.#id;
  }

  static imprimirTablasUI(tablas, seccion) {
    const tablesSection = document.querySelector(`#${seccion} .row`);
    const tablesFragment = document.createDocumentFragment();

    tablas.forEach((tabla) => {
      const tableTemplate = document.querySelector("#table");
      const rowTemplate = document.querySelector("#row");
      const cloneTable = tableTemplate.content.cloneNode(true);
      const rowsFragment = document.createDocumentFragment();

      // Agregar titulo a cada tabla
      cloneTable.querySelector(
        "h5"
      ).textContent = `${tabla.tipo} ${tabla.getID}`;

      // Agregar filas a cada tabla
      tabla.selecciones.forEach((seleccion) => {
        const cloneRow = rowTemplate.content.cloneNode(true);

        cloneRow.querySelector(".sele-nombre").textContent = seleccion.nombre;
        cloneRow
          .querySelector("img")
          .setAttribute("src", `images/flags/${seleccion.id}.png`);

        rowsFragment.appendChild(cloneRow);
      });

      cloneTable.querySelector("tbody").appendChild(rowsFragment);
      tablesFragment.appendChild(cloneTable);
    });

    tablesSection.appendChild(tablesFragment);
  }
}

export default Tabla;
