
function soma(): number {
  var INDICE: number = 13;
  var SOMA: number = 0;
  var K: number = 0;

  while( K < INDICE) {
    K += 1;
    SOMA += K;
  }

  return SOMA;
}

console.log("Resultado final de soma: " + soma());