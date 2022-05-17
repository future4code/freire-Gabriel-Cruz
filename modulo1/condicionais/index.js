// Exercicio 1
// A) O usuario vai inserir um numero, esse numero vai ser analizado para ver se ele é divisivel por 2 ou se é igual a zero, se sim ele passou no teste... Caso não seja, ai ele não passou no teste
// B) Numeros divisiveis por 2 ou o zero
// C) Numeros não divisiveis por 2

// Exercicio 2 
// A) Nesse caso é uma lista interativa com o usuario, ele (usuario) pesquisa uma furta e vai ser impresso pra ele qual a fruta ele escolheu e qual é o valor.
// B) "O preço da fruta Maçã é R$ 2.25"
// C) Ele imprime o preco de "default"

// Exercicio 3
// A) A primeira linha recebe um numero do usuario, e indentifica para o sistema que é um numero
// B) Na hipotese do numero ser 10, aparecera a seguinte mensagem "Esse número passou no teste", não tem mensagem definida se o numero menor que zero.
// C) O 'else' não ta definido, então quando o numero for menor que ZERO não terá mensagem.


// Exercicio de escrita 1

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 17){
    console.log('Você pode dirigir')
}
else
    console.log('Você não pode dirigir')



// Exercicio de escrita 2

const periodo = prompt("Qual periodo você estuda? (M=matutino, V=vespertino ou N=noturno)")
if (periodo === 'M') {
    console.log('Bom Dia!')
} else if(periodo === 'V'){
    console.log('Boa Tarde!')
} else if(periodo === 'N') {
    console.log('Boa Noite!')
}


// Exercicio de escrita 3

switch (periodo) {
    case 'M':
        saudacao = "Bom Dia!"
        break;
        case 'V':
            saudacao = "Boa Tarde!"
            break;
            case 'N':
                saudacao = "Boa Noite!"
                break;
default:
    saudacao = "Use as letras maiusculas"
    break;
}
console.log(saudacao)


// Exercicio de escrita 4

const filme = prompt('O filme é de fantasia? Sim/Não') === "Sim" 
const preco1 = prompt('Custa menos que 15 reais? Sim/Não') === "Sim"

if(filme && preco1){
    console.log('Bom Filme!')
} 
else {
    console.log('Escolha outro filme :(')
}