// Exercício 1
// A) Vai ser impresso os dados com sua respectiva posição na array e vai copiar a array 3 vez.

// Exercício 2
// A) vai ser impresso no console os dados e suas posições tudo em uma array só

// Exercício 3
// A) Vai imprimir dos objetos que não tenha o apelido "Chijo", então ele vai imprimir 2 objetos

// Exercício de escrita 1
// A)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novArray1 = pets.map((pets) =>{
     return pets.nome
 })

 console.log(novArray1)

 // B)

 const novArray2 = pets.filter((pets)=>{
     return pets.raca === "Salsicha"
 })

 console.log(novArray2)

 // C) 

 const novArray3 = pets.filter((pets)=>{
     return pets.raca === "Poodle"
 })

 const novArray4 = novArray3.map((novArray3)=>{
     return novArray3.nome
 })

 console.log('Você ganhou um cupom de desconto de 10% para tosar o/a', novArray4[0])
 console.log('Você ganhou um cupom de desconto de 10% para tosar o/a', novArray4[1])

 //Exercício 2
// A)
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: "2.5" },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: "7.8" },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: "12.6" },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: "5.7" },
    { nome: "Leite", categoria: "Bebidas", preco: "2.99" },
    { nome: "Cândida", categoria: "Limpeza", preco: "3.30" },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: "2.2" },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: "55" },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: "8.99" },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: "10.80" }
 ]

 const mercado1 = produtos.map((produtos)=>{
     return produtos.nome
 })
 console.log(mercado1)


 // B)
 
//  const desconto = produtos.filter((produtos)=>{
//        return produtos !== 
//  })
 
//  console.log(desconto)
 

 // C)
const liquidos = produtos.filter((produtos)=>{
    return produtos.categoria === "Bebidas"
})

console.log(liquidos)

// D)

// const marca = produtos.map((produtos)=>{
//      return produtos.nome
// })

// console.log(produtos.includes("Ypê"))

// E)

