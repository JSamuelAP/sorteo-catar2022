import Seleccion from "./classes/Seleccion.js";
import Bombo from "./classes/Bombo.js";
import Grupo from "./classes/Grupo.js";

export function aleatoriosSinRepetir(limInf, limSup) {
  const aleatorios = new Array(limSup - limInf + 1);
  let numAleatorio;

  for (let i = 0; i < aleatorios.length; i++) {
    // Generar otro número hasta que no este repetido
    do {
      numAleatorio = Math.floor(Math.random() * aleatorios.length + limInf);
    } while (hayRepetido(numAleatorio, aleatorios));
    // El número no se encontro en el arrego, por lo que sí se puede incluir
    aleatorios[i] = numAleatorio;
  }

  return aleatorios;
}

function hayRepetido(numero, arreglo) {
  return arreglo.includes(numero);
}

function crearBombos() {
  const bombo1 = new Bombo(1, [
    new Seleccion("Catar", "qat", "AFC"),
    new Seleccion("Brasil", "bra", "CONMEBOL"),
    new Seleccion("Bélgica", "bel", "UEFA"),
    new Seleccion("Francia", "fra", "UEFA"),
    new Seleccion("Argentina", "arg", "CONMEBOL"),
    new Seleccion("Inglaterra", "eng", "UEFA"),
    new Seleccion("España", "esp", "UEFA"),
    new Seleccion("Portugal", "por", "UEFA"),
  ]);
  const bombo2 = new Bombo(2, [
    new Seleccion("México", "mex", "CONCACAF"),
    new Seleccion("Holanda", "ned", "UEFA"),
    new Seleccion("Dinamarca", "den", "UEFA"),
    new Seleccion("Alemania", "ger", "UEFA"),
    new Seleccion("Uruguay", "uru", "CONMEBOL"),
    new Seleccion("Suiza", "sui", "UEFA"),
    new Seleccion("EE.UU.", "usa", "CONCACAF"),
    new Seleccion("Croacia", "cro", "UEFA"),
  ]);
  const bombo3 = new Bombo(3, [
    new Seleccion("Senegal", "sen", "CAF"),
    new Seleccion("Irán", "irn", "AFC"),
    new Seleccion("Japón", "jpn", "AFC"),
    new Seleccion("Marruecos", "mar", "CAF"),
    new Seleccion("Serbia", "srb", "UEFA"),
    new Seleccion("Polonia", "pol", "UEFA"),
    new Seleccion("Corea del Sur", "kor", "AFC"),
    new Seleccion("Túnez", "tun", "CAF"),
  ]);
  const bombo4 = new Bombo(4, [
    new Seleccion("Camerún", "cam", "CAF"),
    new Seleccion("Canadá", "can", "CONCACAF"),
    new Seleccion("Ecuador", "ecu", "CONMEBOL"),
    new Seleccion("Arabia Saudí", "ksa", "AFC"),
    new Seleccion("Ghana", "gha", "CAF"),
    new Seleccion("Gales", "wal", "UEFA"),
    new Seleccion("Perú", "per", "CONMEBOL"),
    new Seleccion("Costa Rica", "crc", "CONCACAF"),
  ]);

  return [bombo1, bombo2, bombo3, bombo4];
}

export let grupos;
function crearGrupos() {
  const grupoA = new Grupo("A", []);
  const grupoB = new Grupo("B", []);
  const grupoC = new Grupo("C", []);
  const grupoD = new Grupo("D", []);
  const grupoE = new Grupo("E", []);
  const grupoF = new Grupo("F", []);
  const grupoG = new Grupo("G", []);
  const grupoH = new Grupo("H", []);

  return [grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH];
}

export function initApp() {
  const bombos = crearBombos();
  Bombo.imprimirTablasUI(bombos, "bombos");

  const boton = document.querySelector("#btn-sortear");
  boton.addEventListener("click", () => {
    grupos = crearGrupos();
    document.querySelector("#bombos").classList.add("d-none");
    document.querySelector("#grupos").classList.remove("d-none");

    do {
      Bombo.sortear(bombos);
    } while (Grupo.hayConfederacionesRepetida(grupos));

    Grupo.desordenarSelecciones();
    mostrarGrupos();
  });
}

function mostrarGrupos() {
  const spinner = document.querySelector(".sk-cube-grid");
  spinner.classList.remove("d-none");
  document.querySelector("#grupos .row").textContent = "";

  setTimeout(() => {
    spinner.classList.add("d-none");
    Grupo.imprimirTablasUI(grupos, "grupos");
  }, 1000);
}
