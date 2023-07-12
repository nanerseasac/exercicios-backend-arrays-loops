const disjuntores = [false, false, true, false, false, true, false, false];

let ligados = 0;
let desligados = 0;

for (let i = 0; i < disjuntores.length; i++) {
	if (!disjuntores[i]) {
		desligados++;
	} else {
		ligados++;
	}
}

console.log(ligados, desligados);
