const numeros = [3, 24, 1, 8, 11, 7, 15];

let highNum;

for (const num of numeros) {
	if (highNum === undefined) {
		highNum = num;
	}
	if (num > highNum) {
		highNum = num;
	}
}

console.log(highNum);
