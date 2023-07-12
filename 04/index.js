const mult3 = [];

let numero = 0;

while (numero <= 500) {
	if (numero % 3 === 0) {
		mult3.push(numero);
	}
	numero++;
}

console.log(mult3);
