// Exercício 1
// O que será impresso no console é 10 e 50, que seria o resultado de 5*2 e 5*10
// Ele não imprime nada

//Exercício 2
// Essa função pega o texto que o usuário digitou e vai analisar se o texto tem a palavra cenoura, e vai colocar o texto em letras minúsculas
// As 3 frases contém a palavra cenoura

// Exercícios de escrita

let nome = ('Gabriel')
let idade = ('24')
let cidade = ('São Paulo' )
let profissão = ('estudante.')

console.log ('Eu sou', nome, ', tenho', idade, ' anos, moro em', cidade, 'e sou', profissão,)

let nomeUsu = prompt('Informe seu nome')
let idadeUsu = prompt('Informe sua idade')
let cidadeUsu = prompt('Informe sua cidade')
let profissãoUsu = prompt('Informe sua profissão')

console.log('Eu sou', nomeUsu, ', tenho ', idadeUsu,'anos, moro em', cidadeUsu,'e sou', profissãoUsu,)

//Exercícios 2
//const num1 = prompt('Digite um numero')
//function imprimeVariavel() {
//const num2 = prompt('Digite outro número')
//const soma = num1+num2
//}
//console.log(soma)


//Exercício 3

const numero= Number(prompt("Coloque um número"))
const numero1= Number(prompt("Coloque outro número"))
console.log('Os números inseridos:', numero,'e', numero1,)

soma = Number(numero+numero1)
console.log('Soma:', soma)

menos = Number(numero-numero1)
console.log('Diferença:', menos)

multiplicar = Number(numero*numero1)
console.log('Multiplicação:', multiplicar)

dividir = Number(numero/numero1)
console.log('Divisão:', dividir)