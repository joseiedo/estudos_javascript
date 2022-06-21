// Crie uma função para verificar se um valor é Truthy
function checkEhVerdadeiro(valor) {
  return !!valor;
}
console.log(checkEhVerdadeiro("1"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcPerimetroQuadrado(lado) {
  return lado * 4;
}
console.log(calcPerimetroQuadrado(40));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
nomeCompleto = retornaNomeCompleto("José", "Duarte");
console.log(`Seu nome completo é ${nomeCompleto}`);

// Crie uma função que verifica se um número é par
function verificaPar(num) {
  if (num % 2 === 0) {
    return "É par";
  } else {
    return "É ímpar";
  }
}
console.log(verificaPar(2));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipo(dado) {
  return typeof dado;
}
console.log(retornaTipo(1));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log(nomeCompleto);
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
