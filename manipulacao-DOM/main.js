import BotaoConclui from "./componentes/concluiTarefa";
import BotaoDeleta from "./componentes/deletaTarefa";
const novaTarefa = document.querySelector("[data-form-button]");
const input = document.querySelector("[data-form-input]");
const valor = input.value;

const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
  input.value = " ";
};

novaTarefa.addEventListener("click", criarTarefa);
