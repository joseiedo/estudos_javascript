// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const curso = document.querySelectorAll(".curso");

const cursosArray = Array.from(curso);
const cursosObjeto = cursosArray.map((curso) => {
  return {
    titulo: curso.querySelector("h1").innerText,
    descricao: curso.querySelector("p").innerText,
    aulas: +curso.querySelector(".aulas").innerText,
    horas: +curso.querySelector(".horas").innerText,
  };
});

console.log(cursosObjeto);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((item) => {
  return item > 100;
});

console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const checkInstrumentos = instrumentos.some((item) => {
  return item === "Baixo";
});

console.log(checkInstrumentos);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const valorLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + valorLimpo;
}, 0);

console.log("Total: R$ " + valorTotal.toString().replace(".", ","));
