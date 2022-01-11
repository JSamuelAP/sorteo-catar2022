export function aleatoriosSinRepetir(limInf, limSup) {
  const aleatorios = new Array(limSup - limInf + 1);
  let numAleatorio;

  for (let i = 0; i < aleatorios.length; i++) {
    // Generar otro número hasta que no este repetido
    while (hayRepetido(numAleatorio, aleatorios)) {
      numAleatorio = Math.floor(Math.random() * aleatorios.length + limInf);
    }
    // El número no se encontro en el arrego, por lo que sí se puede incluir
    aleatorios[i] = numAleatorio;
  }

  return aleatorios;
}

function hayRepetido(numero, arreglo) {
  return arreglo.includes(numero);
}
