const charac = ["@", "#", "$", "%", "&", "*"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letter = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "n",
];

const botaoGerar = document.querySelector("[data-botaoGerar]");

const checkboxLetras = document.querySelector("[data-letras]");
const checkboxNumeros = document.querySelector("[data-numeros]");
const checkboxEspeciais = document.querySelector("[data-especiais]");
const tamanhoSenha = document.querySelector("[data-tamanhoSenha]");

const senhaGerada = document.querySelector("[data-senhaGerada]");

const all = [];
let password = [];

let numbersAll = [];
let lettersAll = [];
let charactersAll = [];

let numbersAndLetterAndCharac = [];

let amount = 0;

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function creatPassword() {
    numbersAndLetterAndCharac = numbersAll
    .concat(lettersAll)
    .concat(charactersAll);
    
  for (let i = 0; i < Number(tamanhoSenha.value) - amount; i++) {
    password.push(
      numbersAndLetterAndCharac[
        randomNumberInterval(0, numbersAndLetterAndCharac.length)
      ]
    );
  }

  
  return password.join("");
}

botaoGerar.addEventListener("click", () => {

    amount = 0;
    password = []

    if (checkboxNumeros.checked) {
      numbersAll = all.concat(numbers);
      password.push(numbers[randomNumberInterval(0, numbers.length - 1)]);
      amount++;
    }
    
    if (checkboxLetras.checked) {
      lettersAll = all.concat(letter);
      password.push(letter[randomNumberInterval(0, letter.length - 1)]);
      amount++;
    }
    
    if (checkboxEspeciais.checked) {
      charactersAll = all.concat(charac);
      password.push(charac[randomNumberInterval(0, charac.length - 1)]);
      amount++;
    }

  console.log(
   amount, numbersAndLetterAndCharac
  );
  return (senhaGerada.innerHTML = `<h2 class="senhaGerada" data-senhaGerada>${creatPassword()}</h2>`);
});
