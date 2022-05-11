//Exercício 1
//1.1
//Os 4 resultados são falsos.

//1.2
//Ele não definiu que seria numeros, então não vai fazer a soma.

//1.3
//Colocaria assim let primeiroNumero = Number(prompt("Digite um numero!"))
//                let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercício de escrita
//1.a
const idade = prompt('Qual sua idade?')
const idadeAmiga = prompt ('Qual a idade da sua melhor amiga?')

resultado = idade > idadeAmiga

console.log ('Sua idade é maior do que a do seu melhor amigo?', resultado)

subtração = idade - idadeAmiga

console.log ('A diferença de idade é', subtração)

//2.a
const numpar = prompt('Coloque um número par!')
divisão = numpar / 2
console.log ('O resultado da divisão é', divisão)

//2.C) O número é dividido pela metade
//2.D) O número é dividido pela metade e ele acrescenta numeros antes da virgula.

//3.A
meses = idade * 12
console.log ('A idade do usuário em meses é', meses)

//3.b
dias = meses * 30
console.log ('A idade do usuário em dias é', dias)

//3.C
horas = dias * 24
console.log ('A idade do usuário em horas é', horas)

//4.0
const numA = prompt('Digite um numero')
const numB = prompt('Digite outro numero')

maiorque = numA > numB
igualque = numA === numB
div1 = numA % numB === 0
div2 = numB % numA === 0
console.log('O primeiro numero é maior que segundo?', maiorque)
console.log('O primeiro numero é igual ao segundo?', igualque)
console.log('O primeiro numero é divisível pelo segundo?', div1)
console.log('O segundo numero é divisível pelo primeiro?', div2)