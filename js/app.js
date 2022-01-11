import Seleccion from "./classes/Seleccion.js";
import Bombo from "./classes/Bombo.js";
import Grupo from "./classes/Grupo.js";

export let bombos, grupos;

const bombo1 = new Bombo(1, [
  new Seleccion("Catar", "qat", "AFC"),
  new Seleccion("Bélgica", "bel", "UEFA"),
  new Seleccion("Brasil", "bra", "CONMEBOL"),
  new Seleccion("Francia", "fra", "UEFA"),
  new Seleccion("Inglaterra", "eng", "UEFA"),
  new Seleccion("Argentina", "arg", "CONMEBOL"),
  new Seleccion("Italia", "ita", "UEFA"),
  new Seleccion("España", "esp", "UEFA"),
]);
const bombo2 = new Bombo(2, [
  new Seleccion("Dinamarca", "den", "UEFA"),
  new Seleccion("Holanda", "ned", "UEFA"),
  new Seleccion("EE.UU.", "usa", "CONCACAF"),
  new Seleccion("Alemania", "ger", "UEFA"),
  new Seleccion("Suiza", "sui", "UEFA"),
  new Seleccion("México", "mex", "CONCACAF"),
  new Seleccion("Croacia", "cro", "UEFA"),
  new Seleccion("Colombia", "col", "CONMEBOL"),
]);
const bombo3 = new Bombo(3, [
  new Seleccion("Suecia", "swe", "UEFA"),
  new Seleccion("Gales", "wal", "UEFA"),
  new Seleccion("Senegal", "sen", "CAF"),
  new Seleccion("Irán", "irn", "AFC"),
  new Seleccion("Perú", "per", "CONMEBOL"),
  new Seleccion("Serbia", "srb", "UEFA"),
  new Seleccion("Japón", "jpn", "AFC"),
  new Seleccion("Marruecos", "mar", "CAF"),
]);
const bombo4 = new Bombo(4, [
  new Seleccion("Argelia", "alg", "CAF"),
  new Seleccion("Túnez", "tun", "CAF"),
  new Seleccion("Corea del Sur", "kor", "AFC"),
  new Seleccion("Nigeria", "nga", "CAF"),
  new Seleccion("Canadá", "can", "CONCACAF"),
  new Seleccion("Ecuador", "ecu", "CONMEBOL"),
  new Seleccion("Arabia Saudí", "ksa", "AFC"),
  new Seleccion("Panamá", "pan", "CONCACAF"),
]);

bombos = [bombo1, bombo2, bombo3, bombo4];
Bombo.imprimirTablasUI(bombos, "bombos");

const grupoA = new Grupo("A", []);
const grupoB = new Grupo("B", []);
const grupoC = new Grupo("C", []);
const grupoD = new Grupo("D", []);
const grupoE = new Grupo("E", []);
const grupoF = new Grupo("F", []);
const grupoG = new Grupo("G", []);
const grupoH = new Grupo("H", []);

grupos = [grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH];

const boton = document.querySelector("#btn-sortear");
boton.addEventListener("click", () => {
  document.querySelector("#bombos").classList.add("d-none");
  document.querySelector("#grupos").classList.remove("d-none");
  bombo1.sortear();
  Grupo.imprimirTablasUI(grupos, "grupos");
});
