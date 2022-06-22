'use strict'

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

if(true) {
  let mes = 'Dezembro';
  console.log(mes);
}
// console.log(mes) // Erro, mes is not defined por ser um let.

//usar sempre const ou let pra evitar vazamento de bloco
{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}
console.log(carro2); // 'Fusca 2'
// console.log(ano); // erro ano is not defined
var i = 50;

// for(let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }
console.log(i*10);

const semana = 'Sexta';
//semana = 'Quinta'
console.log(semana);

const data =  {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;
