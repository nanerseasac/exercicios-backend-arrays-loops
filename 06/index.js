const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let totalOdd = 0;

const sumOdd = numeros.filter((num) => num % 2 === 0);

for (const sum of sumOdd) {
	totalOdd += sum;
}

console.log(totalOdd);
