// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array[index] = "teste";
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// const retornoForEach = li.forEach((item, index) =>
//   item.classList.add("ativa" + index)
// );

// console.log(retornoForEach);

// const carros = ["Ford", "Fiat", "Honda"];

// const newCarros = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numeros);
// console.log(numerosX2);

// console.log(carros);
// console.log(newCarros);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// const nomeAulas = (aula) => aula.nome;
// const nomeAulas2 = function (aula) {
//   return aula.nome;
// };

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const aulas = [10, 25, 30];
// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// }, 0);

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.min;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// const frutas = ["Banana", "Pêra", "Uva"];

// const frutasRight = frutas.reduceRight((acc, fruta) => {
//   console.log(acc);
//   return acc + " " + fruta;
// });
// console.log(frutasRight); // Uva Pêra Banana

// const frutasLeft = frutas.reduce((acc, fruta) => {
//   console.log(acc);
//   return acc + " " + fruta;
// });
// console.log(frutasLeft); // Banana Pêra Uva

const frutas = ["Banana", "asas", "Pêra", "Uvas"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});

const every = frutas.every((fruta) => {
  console.log(fruta);
  return fruta;
});

const indexUva = frutas.findIndex((item) => {
  return item === "Uvas";
});

console.log("Index: ", indexUva);

console.log(every);

// console.log(temUva);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((n) => n >= 6);

console.log(maiorQue3);

const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayFrutas = frutas1.filter((item, index, array) => {
  return item;
});
console.log(frutas1);
console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
});

console.log(maiores15);
