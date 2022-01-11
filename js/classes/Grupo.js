class Grupo {
  #id;

  constructor(id, lugares) {
    this.#id = id;
    this.lugares = lugares;
  }

  get getID() {
    return this.#id;
  }

  static imprimirGruposUI(grupos) {
    const gruposSection = document.querySelector("#grupos .row");
    const tablesFragment = document.createDocumentFragment();

    grupos.forEach((grupo) => {
      const tableTemplate = document.querySelector("#table");
      const rowTemplate = document.querySelector("#row");
      const cloneTable = tableTemplate.content.cloneNode(true);
      const rowsFragment = document.createDocumentFragment();

      // Agregar nombre al grupo
      cloneTable.querySelector("h5").textContent = `Grupo ${grupo.getID}`;

      // Agregar las 4 selecciones a cada grupo
      grupo.lugares.forEach((lugar) => {
        const cloneRow = rowTemplate.content.cloneNode(true);

        cloneRow.querySelector(".sele-nombre").textContent = lugar.nombre;
        cloneRow
          .querySelector("img")
          .setAttribute("src", `images/flags/${lugar.id}.png`);

        rowsFragment.appendChild(cloneRow);
      });

      cloneTable.querySelector("tbody").appendChild(rowsFragment);
      tablesFragment.appendChild(cloneTable);
    });

    gruposSection.textContent = "";
    gruposSection.appendChild(tablesFragment);
  }
}

export default Grupo;
