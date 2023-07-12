const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrTotal = [...arrayA, ...arrayB];

const arrOrdenado = arrTotal.sort((a, b) => a - b);

const arrCortado = arrOrdenado.slice(0, 5);

for (let i = 0; i < arrCortado.length; i++) {
	console.log(arrCortado[i]);
}
