// nomeie 3 propriedades ou métodos de strings
var fraseMinuscula = "morango".toLowerCase;
var fraseMaiuscula = "morango".toUpperCase;
var letraEspecifica = "morango".charAt(3);
var qntdLetrasString = "morango".length;
var substituiLetra = "morango".replace("a", "aiai");
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
evento = btn.addEventListener("click", function () {
  console.log("texto");
});
listaClasses = btn.classList;
removeAtributo = btn.removeAttribute("pink");
conteudoDentroHTML = btn.innerHTML;
backgroundColor = btn.style.backgroundColor = "pink";
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

btn.addEventListener("click", function () {
  navigator.clipboard.writeText("Fui Copiado");
});
