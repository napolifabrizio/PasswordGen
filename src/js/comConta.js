import createPassword from "./geradorSenhas.js";

const botaoGerar = document.querySelector("[data-botaoGerar2]");

const checkboxLetras = document.querySelector("[data-letras2]");
const checkboxNumeros = document.querySelector("[data-numeros2]");
const checkboxEspeciais = document.querySelector("[data-especiais2]");
const tamanhoSenha = document.querySelector("[data-tamanhoSenha2]");

const senhaGerada = document.querySelector("[data-senhaGerada2]");

botaoGerar.addEventListener("click", () => {
  return (senhaGerada.innerHTML = `<h2 class="senhaGerada" data-senhaGerada>${createPassword(
    checkboxNumeros.checked,
    checkboxLetras.checked,
    checkboxEspeciais.checked,
    tamanhoSenha.value
  )}</h2>`);
});
