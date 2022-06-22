// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao");
const h2Animais = animais.querySelector("h2");
console.log(h2Animais.innerHTML);

// Selecione o último p do site
const todosP = document.querySelectorAll("p");
const ultimoP = todosP[--todosP.length];
console.log(ultimoP.innerHTML);
