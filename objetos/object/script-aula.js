// const pessoa = new Object({
//   nome: "André",
// });

// console.log(pessoa);

// const carro = {
//   marca: "Marca",
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro).init("Honda");
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init("Ferrari");
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto);

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + " Total Rodas";
//     },
//   },
// });

// console.log(moto);

// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//   window,
//   "innerHeight"
// );
// // Puxa de uma única propriedade

// Object.keys(Array);
// // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };
// Object.keys(carro);
// // ['marca', 'ano']
// Object.values(carro);
// // ['Ford', 2018]
// Object.entries(carro);
// // [['marca', 'Ford'], ['ano', 2018]]

// console.log(Object.getPrototypeOf("frutas"));
// console.log(Array.prototype);

// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// const novaFruta = frutas1;

// novaFruta[0] = "Uva";

// console.log(frutas1);

// console.log(Object.is(frutas1, novaFruta));

// const carro1 = {
//   marca: "Ford",
//   ano: 2018,
// };

// Object.freeze(carro1);
// carro1.portas = 4;
// delete carro1.marca;

// carro1.marca = "Honda";

// console.log(carro1);
// console.log(Object.isFrozen(carro1));

const frutas = ["Banana", "Uva"];
const frase = "Oi frase";
const somar = function (a, b) {
  return a + b;
};

const carro = {
  marca: "Ford",
};

console.log(carro.toString());

console.log(Object.prototype.toString.call(somar));
