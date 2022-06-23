// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const distanciaImgTopo = img.offsetTop;
console.log(distanciaImgTopo);
let totalLargura = 0;

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    totalLargura += img.offsetWidth;
  });
  console.log(`O total de largura é: ${totalLargura}`);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll(".menu a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(`link ${link} está de acordo com o google`);
  } else {
    console.log(`link ${link} não está de acordo com o google`);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const media = window.matchMedia("(max-width: 720px)").matches;
if (media) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
