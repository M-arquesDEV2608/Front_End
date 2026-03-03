//If/Else - Condicionais
//AS estruturas condicionais permitem executar diferentes blocos de códigos dependendo de uma condição

//Exemplo 01
let idade = 18
if (idade >= 18){
    console.log("Você é maior de idade!")
}
else {
    console.log("Você é menor de idade")
}

//Exemplo 02
let nota = 7
if(nota >= 5){
    console.log("Aprovado! 👏")
}
else {
    console.log("Reprovado! 😥")
}

//Exemplo 03
let senha = "1234"
if (senha === "1234"){
    console.log("Acesso permitido! 👍")
}
else { 
    console.log("Senha incorreta 🙅")
}

console.log(" ")
console.log("ATIVIDADES")
console.log(" ")

//01
let num = 18
if (num >= 0){
    console.log("Positivo")
}
else {
    console.log("Negativo")
}

//02
let idadE = 18
if (idadE >= 18){
    console.log("Você é maior de idade!")
}
else {
    console.log("Você é menor de idade")
}

//03
let num1 = 7/2
if(num1 === 0){
    console.log("Par")
}
else {
    console.log("Ímpar")
}


//04
let notA = 7
if(notA >= 6){
    console.log("Aprovado! 👏")
}
else {
    console.log("Reprovado! 😥")
}



//05
let votar = 18
if (votar >= 16){
    console.log("pode votar")
}
else {
    console.log("não pode votar")
}

//06
let senhA = "1234"
if (senhA === "1234"){
    console.log("Acesso permitido!")
}
else { 
    console.log("Senha incorreta")
}

//07
let temp = 25
if (temp >= 25){
    console.log("Está quente")
}
else {
    console.log("Está frio")
}

//08
let altura = 1.70
if (altura >= 1.50){
    console.log("Pode entrar")
}
else {
    console.log("Não pode entrar")
}

//09
let num3 = 18
if (num3 >= 1){
    console.log("Positivo")
}
else if(num3 === 0){
    console.log("igual a zero")
}
else {
    console.log("Negativo")
}

//10
let nota1 = 7
if(nota1 >= 9){
    console.log("Excelente!")
}
else if(nota1 === 7 || 8) {
    console.log("Bom")
}
else if(nota1 === 6) {
    console.log("Regular")
}
else {
    console.log("Reprovado!")
}

//11
let cnh = true
let idade2 = 18
if (idade2 >= 18 && cnh){
    console.log("pode dirigir")
}
else {
    console.log("não pode dirigir")
}

//12
let compra = 101
if (compra > 100){
    console.log("ganhou desconto")
}
else {
    console.log("sem desconto")
}

//13
let usuario = "admin"
let senh = "123"
if (usuario === "admin" && senh === "123"){
    console.log("login realizado")
}
else {
    console.log("erro de login")
}

//14
let idade3 = 18
if (idade3 >= 16){
    console.log("Pode assistir")
}
else {
    console.log("Não pode assistir")
}

//15
let cor1 = "Verde" && "Amarelo" && "Vermelho" 
if (cor1 === "Verde"){
    console.log("Pode passar")
}
else if (cor1 == "Amarelo" ){
    console.log("Atenção")
}
else if (cor1 === "Vermelho"){
    console.log("Pare")
}

console.log(" ")
console.log("Extra")
console.log(" ")
//Extra
let nota2 = 7
let falta = 4
if(nota2 >= 9 && falta <=5){
    console.log("Aprovado com excelência")
}
else if(nota2 >= 7){
    console.log("Aprovado")
}
else if(nota2 >= 7 && falta >=20){
    console.log("Reprovado")
}
else if(nota2 === 5 || 6.9) {
    console.log("Reguperação")
}
else if(nota2 === 5 || 6.9 && falta >=20) {
    console.log("Reprovado")
}
else if(nota2 < 5 && falta >=20) {
    console.log("Reprovado")
}
else {
    console.log("Reprovado")
}
