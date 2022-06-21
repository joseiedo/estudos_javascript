// var ultimoItem = videoGames.pop();

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

console.log("---------while--------");

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("---------array e loops--------");

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

//item = o valor dinamico array

var frutas = ["Banana", "Pêra", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
