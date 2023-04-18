function randomNumberInterval(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function creatPassword(senhaTamanho, digitosSenha, senhaFinal, contador) {
  for (let i = 0; i < Number(senhaTamanho) - contador; i++) {
    senhaFinal.push(
      digitosSenha[randomNumberInterval(0, digitosSenha.length - 1)]
    );
  }

  return senhaFinal.join("");
}

export {creatPassword, randomNumberInterval};


