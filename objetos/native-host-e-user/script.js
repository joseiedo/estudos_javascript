console.log(typeof Array.fromasddasasd !== "undefined");

// if (typeof Array.fromuguguguu !== "undefined") {
//   console.log("existe");
// } else {
//   console.log("não existe");
// }

// Liste 5 objetos nativos

// String, Number, boolean, array, Object;

// Liste 5 objetos do browser
// window, Document, nodeList, HTMLCollection, history

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
//keyCode, onfreeze

if (typeof document.onfreeze !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}

if (typeof document.onbeforecopy !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
