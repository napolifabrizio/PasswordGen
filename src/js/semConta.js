import createPassword from "./geradorSenhas.js";

const botaoGerar = document.querySelector("[data-botaoGerar]");

const checkboxLetras = document.querySelector("[data-letras]");
const checkboxNumeros = document.querySelector("[data-numeros]");
const checkboxEspeciais = document.querySelector("[data-especiais]");
const tamanhoSenha = document.querySelector("[data-tamanhoSenha]");

const senhaGerada = document.querySelector("[data-senhaGerada]");

botaoGerar.addEventListener("click", () => {
  return (senhaGerada.innerHTML = `<h2 class="senhaGerada" data-senhaGerada>${createPassword(
    checkboxNumeros.checked,
    checkboxLetras.checked,
    checkboxEspeciais.checked,
    tamanhoSenha.value
  )}</h2>`);
});
