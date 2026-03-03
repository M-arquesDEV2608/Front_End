// TIPOS DE DADOS
// No JavaScript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

//  ## Principais tipos de dados:

// - **String** (texto)
// - **Number** (números)
// - **Boolean** (verdadeiro ou falso)
// - **Object** (objetos, que agrupam informações)
// - **Array** (listas de valores)
// - **Null** (valor vazio)
// - **Undefined** (quando algo não foi definido)

// String
// Sempre é escreta entre aspas ("" ou '') 
let nome = "Matheus"
let mensagem = "Olá, Mundo!"

console.log(nome)
console.log(mensagem)

// o `typeof` serve para **descobrir o tipo de um valor ou variável**.
console.log(typeof nome)

// Podemos usar + para juntar strings!
let saudacao = "olá, " + nome + "!"
console.log(saudacao)

let cidade = "Guarulhos"
let cidadenatal = "Santos"

// template String
console.log(`EU moro em ${cidade}, mas nasci em ${cidadenatal}`)

// Number 
// No JavaScript, números podem ser inteiros  ou decimais.

let idade = 17
let altura = 1.69

console.log(`${idade}
${altura}
${typeof altura}`)

let anoatual = 2026
let anonascimento = 2008
let suaidade = anoatual - anonascimento
console.log(`Você tem ${suaidade} anos`)

// const prompt = require("prompt-sync")()
// let aNoatual = parseInt(prompt("Digite o ano atual: "))
// let aNonascimento = parseInt(prompt("Digite o ano que você nasceu:"));
// let sUaidade = aNoatual - aNonascimento
// console.log(`Você tem ${sUaidade} anos`)

// #############################
// Camel Case ---- Mais Famoso
// Primeira palavra minúscula
// Palavras seguintes começam com maiúscula
let idadeUsuario = 0

// PascalCase
// Todas as palavras começam com a letra maiúscula
// usada para classes, contrutores e componentes
// class UsuarioSistema {
    // constructor(nome, idade){
        // this.nome = nome
        // this.idade = idade
    // }
// }

// Snake Case
// palavras separadas por underscore_
// tudo minúsculo
// muito comum no python, banco de dados e APIs
let nome_completo_casado

// Kebab-Case
// Palavras separadas por hífen - 
// !!!!! NÃO FUNCIONA COMO NOME DE VARIAVEL EM JAVASCRIPT
// <divclass="menu-principal"></div>

// #############################

// Boolean
// Um Boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso).

let maiorDeIdade = true
let menorDeIdade = false

console.log(maiorDeIdade, menorDeIdade)

let idade2 = 20
let podeDirigir = idade2 >= 18

console.log(podeDirigir)

// Objeto
// Um objeto agrupa Várias informações dentro de uma mesma variável, usando chave e valor.
let pessoa = {
    nome: "Jessica",
    idade: 17,
    cidade:"Mogi das Cruzes"
}

console.log(pessoa.nome, pessoa.idade, pessoa.cidade)

let carro = {
    marca: "Lamborghini",
    modelo: "Lamborghini Urus S",
    ano: 2018
}

console.log(`Marca: ${carro.marca}
Modelo: ${carro.modelo}
Ano: ${carro.ano}`)

console.log("----------------------------------------")
console.log("Atividades")
// Atividades
console.log("String")
// String (Textos)

console.log("----------------------------------------")
// 1- Crie uma variável nome com seu nome e exiba no console.
let nome1 = "Arthur"
console.log(nome1)

console.log("----------------------------------------")
// 2- Crie uma variável sobrenome e exiba o nome completo.
let sobrenome = "Marques"
console.log(sobrenome)

console.log("----------------------------------------")
// 3- Crie uma frase usando Template String.
console.log(`Olá, meu nome é ${nome1} ${sobrenome}`)

console.log("----------------------------------------")
// 4- Guarde o nome da sua escola em uma variável e exiba.
let escola = "Senai"
console.log(escola)

console.log("----------------------------------------")
// 5- Crie duas strings e junte em uma frase.
let oi = "Olá,"
let world = "Mundo"
console.log(oi, world)

console.log("----------------------------------------")
// 6- Exiba uma mensagem de boas-vindas com o nome do usuário.
let nomeusuario = "Danielle yami yami"

console.log(`Boas-vindas ${nomeusuario}`)

console.log("----------------------------------------")
// 7- Mostre o tamanho de uma string.
let str = "Faz o L"
console.log(str.length)

console.log("----------------------------------------")
// 8- Transforme um texto em letras maiúsculas. (toUpperCase)
let letraMaior = "haru só escuta bts"
console.log(letraMaior.toUpperCase())

console.log("----------------------------------------")
// 9- Transforme um texto em letras minúsculas. (toLowerCase)
let letraMenor = "HARU SÓ ESCUTA BTS"
console.log(letraMenor.toLowerCase())

console.log("----------------------------------------")
// 10- Crie uma frase com nome e cidade.
let nome2 = "Arthur"
let ciDade = "Guarulhos"
console.log(`Olá, meu nome é ${nome2} e moro em ${ciDade}`)

console.log("----------------------------------------")

// Number (Números)
console.log("Number")
console.log("----------------------------------------")
// 1- Crie dois números e exiba a soma.
let num1 = 19
let num2 = 12
let soma = num1 + num2
console.log(`${num1} + ${num2} = ${soma}`)

console.log("----------------------------------------")
// 2- Calcule a subtração entre dois valores.
let num3 = 65
let num4 = 45
let sub = num3 - num4
console.log(`${num3} + ${num4} = ${sub}`)

console.log("----------------------------------------")
// 3- Calcule a multiplicação.
let num5 = 19
let num6 = 12
let mult = num5 * num6
console.log(`${num5} + ${num6} = ${mult}`)

console.log("----------------------------------------")
// 4- Calcule a divisão.
let num7 = 19
let num8 = 12
let div = num7 / num8
console.log(`${num7} + ${num8} = ${div}`)

console.log("----------------------------------------")

// Boolean (Verdadeiro ou Falso)
console.log("Boolean")

console.log("----------------------------------------")
// 1- Crie uma variável ativo com valor true.
let variavel = true

console.log(variavel)

console.log("----------------------------------------")
// 2- Verifique se um número é maior que 10.
let num9 = 10
let maioR = num9 >= 10

console.log(maioR)

console.log("----------------------------------------")
// 3- Verifique se a idade é maior ou igual a 18.
let iDaDe = 20
let maiordeIdade = iDaDe >= 18

console.log(maiordeIdade)

console.log("----------------------------------------")

console.log("Objeto")

console.log("----------------------------------------")
// 1
let sistemadeLogin = {
    login: "admin" ,
    senha: 1234 ,
    tipo: "Senha muito fraca"
}

console.log(`O login do administrador é ${sistemadeLogin.login} e a senha é ${sistemadeLogin.senha}, ${sistemadeLogin.tipo}.`)

console.log("----------------------------------------")
// 2
let cadastrodeAluno = {
    nome: "Lucas" ,
    curso: "Desenvolvimento de sistemas " ,
    turma: " Turma 2"
}

console.log(`O aluno ${cadastrodeAluno.nome} está matriculado no curso de ${cadastrodeAluno.curso}, na turma ${cadastrodeAluno.turma}`)

console.log("----------------------------------------")
// 3
let professor = {
    nome: "Eduardo" ,
    disciplina: "javascript " ,
    turno: "Manha"
}

console.log(`O professor ${professor.nome} ministra a disciplina de ${professor.disciplina} no turno da ${professor.turno}.`)

console.log("----------------------------------------")
// 4
let empresa = {
    nome: " Tech Solutions",
    area: " Tecnologia" ,
    cidade: "Fortaleza"
}

console.log(`A empresa ${empresa.nome} atua na área de ${empresa.area} e fica em ${empresa.cidade}.`)

console.log("----------------------------------------")
// 5
let computador = {
    marca: "Dell" ,
    processador: " Intel i5" ,
    memoria: " 8GB"
}

console.log(`O computador da marca ${computador.marca} possui processador ${computador.processador} e memória de ${computador.memoria}.`)

console.log("----------------------------------------")
// 6
let livro = {
    titulo: "JavaScript Básico" ,
    autor: "Ana Silva" ,
    paginas: 200
}

console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.paginas} páginas.`)

console.log("----------------------------------------")
// 7
let filme = {
    nome: " Matrix " ,
    genero: "Ficção " ,
    ano: 1999
}

console.log(`O filme ${filme.nome} é do gênero ${filme.genero} e foi lançado em ${filme.ano}.`)

console.log("----------------------------------------")
// 8
let jogo = {
    nome: "Minecraft" ,
    plataforma: "PC" ,
    genero: "  Sandbox "

}

console.log(`O jogo ${jogo.nome} roda na plataforma ${jogo.plataforma} e pertence ao gênero ${jogo.genero}.`)

console.log("----------------------------------------")
// 9
let contadeUsuario = {
    usuario: " eduardo",
    senha: "1234",
    nivel: "administrador"
}

console.log(`O usuário ${contadeUsuario.usuario} possui nível ${contadeUsuario.nivel} e utiliza a senha ${contadeUsuario.senha},nal.`)

console.log("----------------------------------------")
// 10
let escola1 = {
    nome: "EEEP",
    cidade: " Fortaleza",
    turno: " manhã"
} 

console.log(`A escola ${escola1.nome} funciona na cidade de ${escola1.cidade} no turno da ${escola1.turno}.`)