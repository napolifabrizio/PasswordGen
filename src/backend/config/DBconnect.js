function createId() {
  let senha = 0;
  for (let i = 0; i < 7; i++) {
    senha = String(senha) + String(randomNumberInterval(0, 9));
  }

  return senha;
}

function randomNumberInterval(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

const senhas = [
  {
    id: createId(),
    nomeSenha: "Senha do Facebook",
    senha: 123,
  },
  {
    id: createId(),
    nomeSenha: "Senha do Instagram",
    senha: 456,
  },
  {
    id: createId(),
    nomeSenha: "Senha do Prime",
    senha: 789,
  },
  {
    id: createId(),
    nomeSenha: "Senha do Youtube",
    senha: 2424,
  },
];

export default senhas;
