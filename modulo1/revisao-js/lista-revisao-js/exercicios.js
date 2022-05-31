// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
const array = [2, 4, 6, 1, 3, 5]
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    array.reverse(array)

  return array 
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b)=>a-b)
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let array1 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 === 0)  {
            array1.push(array[i])
        }
    }
return array1;
}

// EXERCÍCIO 05
// function retornaNumerosParesElevadosADois(array) {
//     let array1 = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] %2 === 0)  {
//             array1.push(array[i])
//         }
//     }
//  return array1
// }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    array.sort((a,b)=>a-b)
    array.reverse(array)
    return array[0]
}

// EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {
//     maiorDivisivelPorMenor = num2%num1

//     return `maiorNumero:${num2},maiorDivisivelPorMenor:${maiorDivisivelPorMenor},diferenca:${num2-num1}`
//}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.short((a,b) => a-b)
    array2[-2]
    array1[1]
    return array1, array2
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const nome = 'O Diabo Veste Prada'
    const ano = 2006
    const diretor = 'David Frankel'
    const atores = ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt',' Stanley Tucci']

    return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((cliente) => {
        cliente.compras.map((compra) => {
            cliente.saldoTotal = cliente.saldoTotal - compra
        })
        cliente.compra = []

        return cliente
    })
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}