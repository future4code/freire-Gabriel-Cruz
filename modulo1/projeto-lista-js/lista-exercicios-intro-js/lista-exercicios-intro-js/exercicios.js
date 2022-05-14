// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alt1 = Number(prompt(altura))
  const larg1 = Number(prompt(largura))
  const area = alt1 * larg1
  console.log (area)
  
}

// EXERCÍCIO 02
function imprimeIdade(anoatual, anodenascimento) {
  // implemente sua lógica aqui
  const anoatual1 = Number(prompt(anoatual))
  const anodenascimento1 = Number(prompt(anodenascimento))
  const idade = anoatual1 - anodenascimento1
  console.log(idade)
  
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsu = prompt(nome)
  const idadeUsu = Number(prompt(idade))
  const emailUsu = prompt(email)

  console.log('Meu nome é '+ nomeUsu + ', tenho ' + idadeUsu + ' anos, e o meu email é '+emailUsu+'.')

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  const cor1U = prompt(cor1)
  const cor2U = prompt(cor2)
  const cor3U = prompt(cor3)

  const listadecores = [cor1U, cor2U, cor3U]
  console.log(listadecores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string1 = prompt(string)
  return string1.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = prompt(string1)
  const frase2 = prompt(string2)

  return frase1 >= frase2
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const array1 = prompt(array)
  return array[5]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const x = [array.lenght -1]
  array[array.lenght -1] = array[0]
  array[0] = x
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = prompt(string1)
  const frase2 = prompt(string2)

  return frase1 === frase2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}