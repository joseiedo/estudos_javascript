// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item, index) => {
  if (index != 0) {
    item.classList.remove("ativo");
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  if (item.hasAttribute) {
    console.log(`A imagem ${index} tem alt`);
  } else {
    console.log(`A imagem ${index} não tem alt`);
  }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector("a[href^='http']");
let hrefLinkExterno = linkExterno.getAttribute("href");
linkExterno.setAttribute("href", "https://www.google.com/");
