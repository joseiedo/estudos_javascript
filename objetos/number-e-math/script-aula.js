console.log(Number.isNaN("saas"));
console.log(Number.isInteger(23.52));

console.log(parseFloat("32332.323"));
console.log(parseFloat("100.26 reais"));
console.log(parseInt("100 reais", 10));
console.log(parseInt(32.34, 10));

const preco = 10.32323;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(valor);
console.log(Math.PI);

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

const aleatorio = Math.floor(Math.random() * 500);
console.log(aleatorio);

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;
