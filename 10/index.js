const numeros = [8, 11, 4, 1];

const numOrd = numeros.sort((a, b) => a - b);

const diff = numOrd[numOrd.length - 1] - numOrd[0];

console.log(diff);
