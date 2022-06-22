var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";

console.log(podeBeber);

var possuiFaculdade = true;

//também funciona, mas apenas com 1 linha de código
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Sim, possui.");
