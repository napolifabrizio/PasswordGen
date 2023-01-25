function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

const charac = ['@', '#', '$', '%', '&', '*']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letter = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'n'
]

const msgNumber = prompt('Deseja ter números na sua senha?')
const msgLetter = prompt('Deseja ter letras na sua senha?')
const msgCharac = prompt('Deseja ter caracteres especiais na sua senha?')
const msgDigits = prompt('Deseja ter quantos digitos na sua senha?')

///////////////////////////////////////////////////////////////////////////////

let all = []
let password = []

let numbersAll = []
let lettersAll = []
let charactersAll = []

let numbersAndLetterAndCharac

if(msgNumber == 'sim') {
    numbersAll = all.concat(numbers)
} 

if (msgLetter == 'sim') {
    lettersAll = all.concat(letter)
} 

if (msgCharac == 'sim') {
    charactersAll = all.concat(charac)
}

numbersAndLetterAndCharac = numbersAll.concat(lettersAll).concat(charactersAll)

for(let i = 0; i < Number(msgDigits); i++) {
    password.push(numbersAndLetterAndCharac[randomNumberInterval(0, numbersAndLetterAndCharac.length)])
}

alert(`Senha: ${password.join('')}`)