// Exercício 1.1
// A. Não foi definido
// B. Não tem valor
// C. Abriu uma sequencia com onze números do 3 ao 13
// D. Ele vai imprimir [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// E. Ele vai imprimir [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// F. Ele quer saber qual numero está na posição Sete = 9

// Exercícios 1.2
// A frase fica assim "SUBI NUM ÔNIBUS EM MIRROCOS"

// Exercícios de escrita de código
// 1

const nomedoUsuario = prompt("Seu nome")
const emaildoUsuario = prompt("Seu email")

console.log('O e-mail', emaildoUsuario ,'foi cadastrado com sucesso. Seja bem-vinda(o),', nomedoUsuario,'!')

// 2.A.
comidaPref = ["macarronada", "feijoada", "nhoque", "strogonoff", "hamburguer"]
console.log (comidaPref)



// 2.B.
console.log("Essas são as minhas comidas preferidas:")
console.log(comidaPref [0])
console.log(comidaPref [1])
console.log(comidaPref [2])
console.log(comidaPref [3])
console.log(comidaPref [4])



// 2.C. 

const comidaFav = prompt('Fale aqui sua comida favorita')

console.log("lista de comidas alterada:", comidaPref[0],",", comidaFav,",", comidaPref.splice(2,4))


// 3
// A.
listaDetarefas = []

const tarefaUm = prompt('Informe uma tarefa')
const tarefaDois = prompt('Informe outra tarefa')
const tarefaTres = prompt('Informe outra tarefa')

listaDetarefas = [tarefaUm, tarefaDois, tarefaTres]

console.log('lista de tarefa', listaDetarefas)

const remove = prompt('Informe um índice de 0 a 2 ')

listaDetarefas.splice (remove,1)

console.log('A lista atualizada é',listaDetarefas.splice(remove,1))
