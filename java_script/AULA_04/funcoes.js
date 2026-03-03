//Funções em JS 

//Uma função é uma bloco de código reutilizável, criado para executar uma tarefa especifica

//function nomeDaFuncao (parametro1, parametro2){
    //código que será executado
//    return resultado
//}

//Exemplo 01 - somar dois números

function somar(a, b){
    return a + b
}

console.log(somar(2, 3))

function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
}

console.log(realParaDolar(20, 5.17).toFixed(2))

function calcularAumento(salario){
    return salario + (salario * 0.25)
}

console.log(calcularAumento(10000))

console.log(" ")
console.log(" ")
console.log("Atividades")
console.log(" ")

//01
function dobro(a, ){
    return a * 2
}

console.log(dobro(3))

console.log("//////////////////")

//02
function triplo(a, ){
    return a * 3
}

console.log(triplo(3))

console.log("//////////////////")

//03
function soma(a, b){
    return a + b
}

console.log(soma(2, 3))

console.log("//////////////////")

//04
function mult(a, b){
    return a * b
}

console.log(mult(4, 6))

console.log("//////////////////")

//05
function conve(valor){
    return valor + (valor * 0.25)
}

console.log(conve(700))

console.log("//////////////////")

//06
function calcular(salar){
    return salar + (salar / 0.25)
}

console.log(calcular(700))

console.log("//////////////////")

//07
function Aumento(salari){
    return salari + (salari * 0.1)
}

console.log(Aumento(1000))

console.log("//////////////////")

//08
function calculo(num){
    if(num % 2 === 0)
        return "Par"
    else{
        return"Impar"
    }
}

console.log(calculo(10))

console.log("//////////////////")

//09
function contador(){
     for (let cont = 1; cont <= 10; cont++) {
    console.log(cont)
  }
}

contador()

console.log("//////////////////")

//10
function contado(c, d){
     for (let conta = c; conta <= d; conta++) {
    console.log(conta)
  }
}

contado(10, 20)

console.log("//////////////////")

//11
function contad(){
    let soma = 0
     for (let contar = 1; contar <= 10; contar++) {
        soma += contar
    console.log(soma)
  }
}

contad()

console.log("//////////////////")

//12
function cta(){
    let par = 0
     for (let contar = -1; contar <= 10; contar++) {
        if (contar % 2 === 0) { // Verifica se é par
            console.log(contar)
            par++
        }
  }
}

cta()

console.log("//////////////////")

//13
function cnta(w){
    let tabuada = w
     for (let contar = 1; contar <= 10; contar++) {
        console.log(tabuada * contar)
        
  }
}

cnta(2)


console.log("//////////////////")

//14
function cont(){
     for (let con = 10; con >= 1; con--) {
    console.log(con)
  }
}

cont()

console.log("//////////////////")

//15
function cot(){
     for (let con = 1; con <= 28; con++) {
        if(con === 27){
            console.log(con)
        }
            
    
  }
}

cot()

console.log("//////////////////")

//16
function conta(){
    let som = 0
    let par = 0
     for (let contar = 1; contar <= 20; contar++) {
        if (contar % 2 === 0) { // Verifica se é par
            som += contar
            console.log(som)
            par++
        }
  }
}

conta()

console.log("//////////////////")

//17
function conta(){
    let impar = 0
     for (let contar = 1; contar <= 10; contar++) {
        if (contar % 2 === 1) { // Verifica se é par
            console.log(contar)
            impar++
        }
  }
}

console.log("//////////////////")

//18
function media(p, l){
    return (p + l) / 2
}

console.log(media(9, 9))

console.log("//////////////////")

//19
function quadrado(j){
    return j * j
}

console.log(quadrado(7))