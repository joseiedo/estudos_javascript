// window.alert('Isso mesmo')

const href = window.location.href;

console.group(href)

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html');
  console.log('É igual')

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1(){
  console.log('Clicou em ',h1Selecionado.innerHTML)
}

h1Selecionado.addEventListener('click', callbackh1)