// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 18;
var idadeIrma = 17;

if (minhaIdade > idadeIrma) {
  console.log("É maior");
} else if (minhaIdade === idadeIrma) {
  console.log("É igual");
} else {
  console.log("É menor");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
// R: 3 porque ele sempre retorna o ultimo valor verdadeiro que achar
// ou o primeiro falso

var expressao = 5 - 2 && 5 - " " && 5 - 2;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(nome, !!nome);
console.log("idade", !!idade);
console.log("possuiDoutorado", !!possuiDoutorado);
console.log("empregoFuturo", !!empregoFuturo);
console.log("dinheiroNaConta", !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

var diferencaHabitantes = china - brasil;
if (china > brasil) {
  console.log(
    `China tem ${diferencaHabitantes} milhões de habitantes a mais que o Brasil`
  );
} else {
  console.log("Brasil tem mais habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
//R: CÃO PORQUE O ULTIMO VALOR TRUE Q É RETORNADO
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
