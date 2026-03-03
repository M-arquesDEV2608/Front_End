// UM array é uma lista que pode armazenar vários valores

let frutas = ["Maça", "Banana", "Uva"]

console.log(frutas[0])
console.table(frutas)

frutas.push("Morango")
console.log(frutas)
console.table(frutas)

// remove a ultima posição
frutas.pop()
console.table(frutas)

//remover a posição indicada (splice)
//frutas.splice(1)
//console.table(frutas)

let animais = ["Macaco", "orca", "João"]

console.table(animais)

animais.push("sandrinha", "mico leão dourado", "saguinus")
console.table(animais)

// exercicio 1
let cores = ["roxo", "vermelho", "verde"]
console.log (cores[1])

// exercicio 2
let numeros = [0,1,2,3,4,5]
console.log (numeros[0],numeros[5])

// exercicio 3
let frutaS = ["Maçã", "Banana"]
console.log (frutaS)
frutaS.push("Uva")
console.log (frutaS)

// exercicio 4
let nomes = ["João", "Marcão", "Dani", "Haru💀"]
console.table (nomes)
frutas.pop()
console.table (nomes)

// exercicio 5
let times = ["vasco","corinthias","palmeiras","gremio"]
console.table (times.length)

// exercicio 6
let animaiS = ["cachorro","cobra","topera","veado"]
console.table (animaiS)

// exercicio 7
let carro = ["uno","ferrari","fox","kwid"]
carro[2] = "fuska"
console.table (carro)

// exercicio 8
let linguagens = ["Python","Html","Css","JavaScript"]
if(linguagens.includes("JavaScript")){
    console.log("Tem JavaScript")
}else{
    console.log("Não tem JavaScript")
} 


// exercicio 9
let valores = [0,1,2,3]
console.log(valores[0] + valores[1] + valores[2] + valores[3])

// exercicio 10
let tarefas = []
tarefas.push("arrumar materiais", "louça", "aula guitarra")
console.log (`1.${tarefas[0]}, 2.${tarefas[1]}, 3.${tarefas[2]}`)

console.log("   ")
console.log("---------------------------------------------------")
console.log("   ")

