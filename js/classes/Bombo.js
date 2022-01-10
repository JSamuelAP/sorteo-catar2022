class Bombo {
  #id;

  constructor(id, selecciones) {
    this.#id = id;
    this.selecciones = selecciones;
  }

  get getID() {
    return this.#id;
  }

  static imprimirBombosUI(bombos) {
    const bombosSection = document.querySelector("#bombos .row");
    const tablesFragment = document.createDocumentFragment();

    bombos.forEach((bombo) => {
      const tableTemplate = document.querySelector("#table");
      const rowTemplate = document.querySelector("#row");
      const cloneTable = tableTemplate.content.cloneNode(true);
      const rowsFragment = document.createDocumentFragment();

      // Agregar nombre al bombo
      cloneTable.querySelector("h5").textContent = `Bombo ${bombo.getID}`;

      // Agregar las 8 selecciones a cada bombo
      bombo.selecciones.forEach((seleccion) => {
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

    bombosSection.appendChild(tablesFragment);
  }
}

export default Bombo;
