var pessoa = {
  nome: "André",
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
// console.table(quadrado);

var height = 100;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;
