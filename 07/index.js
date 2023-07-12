const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const newArr = [];

const filteredNames = nomes.filter((str) => {
	if (str[0] === "A" || str[0] === "a") {
		newArr.push(str);
	}
});

console.log(newArr);
