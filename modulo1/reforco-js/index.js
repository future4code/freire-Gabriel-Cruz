// Exercício 3

const usuario = [
    {nome:"Gabriel", idade: 25, senha: 123456, ano: 1997}
]

const login = Number(prompt("digite sua senha "))

if (login === usuario.senha){
    console.log('Usuario logado')
}else {
    console.log('Senha inválida')
}

 const primeiraDose = prompt('Informe seu nome')
 const vacina = prompt ('Informe sua vacina')


 if ('coronavac' === vacina){
    console.log(`Olá ${primeiraDose}! A próxima dose da coronavac é daqui a 28 dias. Compareça no posto na data 29/08/2021.`)
 } else if('astrazenica' === vacina){
    console.log(`Olá ${primeiraDose}! A próxima dose da Astrazenica é daqui a 90 dias. Compareça no posto na data 30/10/2021.`)
 } else if ('pfizer' === vacina){
    console.log(`Olá ${primeiraDose}! A próxima dose da Pfizer é daqui a 90 dias. Compareça no posto na data 30/10/2021.`)
 } else {
     console.log(`Informe nome e vaicina novamente`)
 }

