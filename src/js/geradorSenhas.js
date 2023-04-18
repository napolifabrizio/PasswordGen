import digitosSenha from "./arraysDigitos.js";

function randomNumberInterval(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function createPassword(primeira, segunda, terceira, tamanhoSenha) {
  let amount = 0;
  const all = [];
  const password = [];

  if (primeira) {
    all.push(...digitosSenha.numbers);
    password.push(
      digitosSenha.numbers[
        randomNumberInterval(0, digitosSenha.numbers.length - 1)
      ]
    );
    amount++;
  }

  if (segunda) {
    all.push(...digitosSenha.letter);
    password.push(
      digitosSenha.letter[
        randomNumberInterval(0, digitosSenha.letter.length - 1)
      ]
    );
    amount++;
  }

  if (terceira) {
    all.push(...digitosSenha.charac);
    password.push(
      digitosSenha.charac[
        randomNumberInterval(0, digitosSenha.charac.length - 1)
      ]
    );
    amount++;
  }

  for (let i = 0; i < Number(tamanhoSenha) - amount; i++) {
    password.push(
      all[randomNumberInterval(0, all.length - 1)]
    );
  }

  return password.join("");
}

export default createPassword;