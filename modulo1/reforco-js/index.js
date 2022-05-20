// Exercício 3

const nomeDoUsuario = prompt('Insira seu nome')
const anoDeNascimento = prompt ('Insira o ano que nasceu')
const senhaDoUsuario = prompt ('Insira a senha')
const nacionalidade = prompt ('Nacionalidade')

cadastro = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade]

switch (cadastro){
    case nomeDoUsuario:
        console.log('Seja Bem Vindo')
        break
    case senhaDoUsuario:
        console.log('Seja Bem Vindo')
        break
    case anoDeNascimento:
        console.log('Seja Bem Vindo')
        break
    case nacionalidade:
        console.log('Seja Bem Vindo')
        break
    default:
        console.log('Você não pode se cadastrar')
}
