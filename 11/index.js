const original = [5, 7, 13, 17, 26, 34, 118, 245];

const arrFiltered = original.filter((num) => (num >= 10 && num <= 20) || num > 100);

console.log(arrFiltered);
