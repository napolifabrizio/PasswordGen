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

let amount = 0

if(msgNumber == 'sim') {
    numbersAll = all.concat(numbers)
    password.push(numbers[randomNumberInterval(0, numbers.length)])
    amount++
} 

if (msgLetter == 'sim') {
    lettersAll = all.concat(letter)
    password.push(letter[randomNumberInterval(0, letter.length)])
    amount++

} 

if (msgCharac == 'sim') {
    charactersAll = all.concat(charac)
    password.push(charac[randomNumberInterval(0, charac.length)])
    amount++

}

function creatPassword() {
    numbersAndLetterAndCharac = numbersAll.concat(lettersAll).concat(charactersAll)

    for(let i = 0; i < (Number(msgDigits) - amount); i++) {
        password.push(numbersAndLetterAndCharac[randomNumberInterval(0, numbersAndLetterAndCharac.length)])
    }

    return password.join('')
}

alert(`Sua senha: ${creatPassword()}`)

