// strings
const message = 'hello wordl!'

// Quantidade de caracters com length
console.log('Quantidade de caracter')
console.log(message.length)

//Juntando log template string
// toUpperCase deixa a string em maisculo e o toLowerCase deixa tudo em minusculo 
const firstName = 'Kaique',
    lastName = 'Ferreira'

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)

// split cortar string em uma lista
const names = 'Felipe, João, Julia'
console.log(names.split(','))

// converter numero em string
const numero = 5
console.log(numero.toString())

// checar o tipo da variavel
console.log(typeof numero.toString());

// null & undefined
const x = null
const y = undefined