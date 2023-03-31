import creatPassword from "./geradorSenhas.js";
import digitosSenha from "./arraysDigitos.js";

function randomNumberInterval(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

const botaoGerar = document.querySelector("[data-botaoGerar]");

const checkboxLetras = document.querySelector("[data-letras]");
const checkboxNumeros = document.querySelector("[data-numeros]");
const checkboxEspeciais = document.querySelector("[data-especiais]");
const tamanhoSenha = document.querySelector("[data-tamanhoSenha]");

const senhaGerada = document.querySelector("[data-senhaGerada]");

botaoGerar.addEventListener("click", () => {
  let all = [];
  let amount = 0;
  let password = [];

  if (checkboxNumeros.checked) {
    all.push(...digitosSenha.numbers);
    password.push(digitosSenha.numbers[randomNumberInterval(0, digitosSenha.numbers.length - 1)]);
    amount++;
  }

  if (checkboxLetras.checked) {
    all.push(...digitosSenha.letter);
    password.push(digitosSenha.letter[randomNumberInterval(0, digitosSenha.letter.length - 1)]);
    amount++;
  }

  if (checkboxEspeciais.checked) {
    all.push(...digitosSenha.charac);
    password.push(digitosSenha.charac[randomNumberInterval(0, digitosSenha.charac.length - 1)]);
    amount++;
  }

  return (senhaGerada.innerHTML = `<h2 class="senhaGerada" data-senhaGerada>${creatPassword(tamanhoSenha.value, all, password, amount)}</h2>`);
});
