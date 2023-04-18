import senhas from "../backend/config/DBconnect.js";

const lista = document.querySelector(".lista");

document.addEventListener("DOMContentLoaded", () => {
    senhas.forEach((senha) => {
        const newItem = `<li class="senhas">${senha.nomeSenha} --- ${senha.senha}</li>`
        lista.insertAdjacentHTML("beforeend", newItem);
    })
});

