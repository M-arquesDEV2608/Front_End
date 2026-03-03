// O **DOM (Document onject Model)** é a representação do HTML em forma de ** arvore de objetos**.

// Isso permite que o javascript:

// - Leia elementos da pagina
// - Modifique textos
// - Troque imagens 
// - Reaja a cliques
// - Crie elementos novos

// O navegador transforma o HTML em objetos manipulaveis


// =============================
// SELECIONANDO ELEMENTOS DO DOM
// ==============================

//selecionar por id
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagem = document.getElementById("imageteste")

//selecionar por classe
let caixas = document.getElementsByClassName("box")

// Mostrando no console para o aluno visualizar
console.log(titulo)
console.log(caixas)
console.log(imagem)


//função para alterar o conteúdo

function alterar(){
    titulo.innerText = "Novo Titulo 😊"
    subtitulo.innerText = "Subtitulo alterado com sucesso"
    paragrafo.innerText = "O texto do parágrafo foi modificado!"

    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"

    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajQ5iBTKUy43s9U7pUqyeOANmw09WBH6fYg&s"
}