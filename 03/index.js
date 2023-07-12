const numeros = [54, 22, 14, 87, 10, 284];
let numFounded = false;

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] === 10) {
		console.log(i);
		numFounded = true;
		break;
	}
}

if (!numFounded) {
	console.log(-1);
}
