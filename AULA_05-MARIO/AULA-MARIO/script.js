//  ================================================== 
//  JOGO DO MARIO!
//  ================================================== 

//  Criação de variável para encontrar as classes.
let mario = document.querySelector(".mario") //Encontrar o mario
let cano = document.querySelector(".cano") //Encontrar o cano
let nuvem = document.querySelector(".nuvem") //Encontrar o nuvem
let telaFim = document.querySelector(".fim") //Encontrar a tela de game over
let botaoReiniciar = document.querySelector(".reiniciar") //Encontrar o botão

console.log('=== PARADA 01 ===')
console.log('Mario', mario)
console.log('Cano', cano)
console.log('Nuvem', nuvem)
console.log('Tela de Fim', telaFim)
console.log('Botão', botaoReiniciar)

function pular(){
    mario.classList.add('pular')

    //setitimeout = espera um tempo e depois executa algo
    setTimeout(function(){
        //desta forma o Mario volta ao normal depois do pulo
        mario.classList.remove('pular')
    }, 500) //500 milissegundos = 0,5 segundos
}
document.addEventListener('keydown', function(){
    //Mostra no console quando a tecla é pressionada
    console.log('Tecla pressionada! chamando função pular()')

    //Qual function() deve chamar?
    pular()
})

//Faça funcionar com um clique na tela
document.addEventListener('click', function(){
    //Mostra no console quando a tecla é pressionada
    console.log('Click do Mouse! chamando função pular()')

    //Qual function() deve chamar?
    pular()
})

console.log('===== INICIADO O LOOP DO JOGO =====')
console.log('Agora o jogo vai começar a verificar colisão....')

let loopDoJogo = setInterval(function(){
    //offsetLeft: Distância do elemento até a borda esquerda da tela
    let posicaoCano = cano.offsetLeft

    //getComputedStyle = pega o estilo atual do elemento 
    //+window.getComputedStyle(mario)
    //Pergunta ao navegador:"Qual é a posição atual do Mario na tela"
    //.bottom
    //Pega a distância do Mario (em pixels)
    //.replace
    //tira o px, deixando só o numero:"120"
    //+window, só o +
    //Transforma o texto "120" no número 120, para o JS fazer contas
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log('cano:', posicaoCano, 'Mario', posicaoMario)
})