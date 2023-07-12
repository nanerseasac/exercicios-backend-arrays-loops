const letras = ["A", "a", "B", "C", "E", "e"];
let totalLetters = 0;

for (let i = 0; i < letras.length; i++) {
	if (letras[i] === "E" || letras[i] === "e") {
		totalLetters++;
	}
}

if (totalLetters > 0) {
	console.log(`Foram encontradas ${totalLetters} letras "E" ou "e".`);
} else {
	console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
