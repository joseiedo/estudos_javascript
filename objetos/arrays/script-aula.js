// // const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// const carros = new Array("Ford", "Fiat", "Honda");

// carros[2] = "Ferrari";
// carros[3] = "Kia";
// carros[20] = "Kia";

// console.log(carros.length);

// const li = document.querySelectorAll("li");

// const arrayLi = Array.from(li);

// const obj = {
//   0: "Andre",
//   1: "Rafael",
//   2: "Teste",
//   length: 4,
// };

// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

// Array.of(10); // [10]
// Array.of(1, 2, 3, 4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(5); // [,,,,]
// Array(1, 2, 3, 4); // [1,2,3,4]

// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

// console.log(frutas[2][0].length);

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// instrumentos.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Ferrari");
const novaArray = carros.push("Parati", "Gol");

// console.log(carros);

// console.log(carros.shift());
// console.log(carros);

// carros.reverse();
// console.log(carros);

// console.log(carros);
// console.log(carros.splice(2, 4, "Fusca"));

// console.log(carros);

console.log(["Item1", "Item2", "Item3", "Item4", "item5"].copyWithin(2, 0, 2));

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 0, 2));

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];

console.log(transporte1.concat(transporte2, "332", "Oi"));
console.log(["oi"].concat(transporte2, transporte1));

let linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

// linguagens = ["html", "css", "js", "php", "python"];
// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(" "); // 'html css js php python'
// linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = "<h2>Título Principal</h2>";
// htmlString = htmlString.split("h2");
// htmlString = htmlString.join("h1");

// console.log(htmlString);

linguagens = ["html", "css", "js", "php", "python"];

const cloneLinguagens = linguagens.slice();

console.log(linguagens);
console.log(cloneLinguagens);
