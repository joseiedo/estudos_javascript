const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValorComida = comidas.shift();
const ultimoValorComida = comidas.pop();
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
if (estudantes.includes("Joana")) {
  console.log("Joana faz parte dos estudantes");
} else {
  console.log("Joana não faz parte dos estudantes");
}

// Verifique se Juliana faz parte dos estudantes
if (estudantes.includes("Juliana")) {
  console.log("Juliana faz parte dos estudantes");
} else {
  console.log("Juliana não faz parte dos estudantes");
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

console.log(html);
html = html.split("section").join("ul").split("div").join("li");

console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const copiaCarros = carros.slice();
console.log(copiaCarros);
carros.pop();
console.log(carros);
