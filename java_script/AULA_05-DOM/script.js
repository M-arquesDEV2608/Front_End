// Ao pressionar as teclas "r", "g" ou "b", mudar a cor de fundo da pagina

//01
document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
    }
    else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
    }
    else if (e.key === "b"){
        document.body.style.backgroundColor = "blue"
    }
})

//02
document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
    }
    else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
    }
    else if (e.key === "b"){
        document.body.style.backgroundColor = "blue"
    }
    console.log(e.key)
})


//03
document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
    }
    else if (e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
    }
    else if (e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
    }
})

//04
document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        document.body.innerHTML = "vermelho"
    }
    else if (e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        document.body.innerHTML = "verde"
    }
    else if (e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        document.body.innerHTML = "azul"
    }
})

//05
document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        document.body.innerHTML = "vermelho"
    }
    else if (e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        document.body.innerHTML = "verde"
    }
    else if (e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        document.body.innerHTML = "azul"
    }
    else if (e.key.toLowerCase() === "y"){
        document.body.style.backgroundColor = "yellow"
        document.body.innerHTML = "amarelo"
    }
    else if (e.key.toLowerCase() === "p"){
        document.body.style.backgroundColor = "purple"
        document.body.innerHTML = "roxo"
    }
})

//06
document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        document.body.innerHTML = "vermelho"
    }
    else if (e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        document.body.innerHTML = "verde"
    }
    else if (e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        document.body.innerHTML = "azul"
    }
    else if (e.key.toLowerCase() === "y"){
        document.body.style.backgroundColor = "yellow"
        document.body.innerHTML = "amarelo"
    }
    else if (e.key.toLowerCase() === "p"){
        document.body.style.backgroundColor = "purple"
        document.body.innerHTML = "roxo"
    }
    else if (e.key.toLowerCase() === "x"){
        document.body.style.background = "none"
        document.body.innerHTML = "cor removida"
    }
})

//07
const cores = {
    r: { color: "red", texto: "vermelho" },
    g: { color: "green", texto: "verde" },
    b: { color: "blue", texto: "azul" },
    y: { color: "yellow", texto: "amarelo" },
    p: { color: "purple", texto: "roxo" },
    
};
document.addEventListener("keydown", function(e){
    const tecla = e.key.toLowerCase
    if (e.key.toLowerCase() === "x"){
        document.body.style.background = "none"
        document.body.innerHTML = "cor removida"
    }

    if (cores[tecla]){
        document.body.style.backgroundColor = cores[tecla].color
        document.body.innerHTML = cores[tecla].texto

    }
})

//08
const cors = {
    r: { color: "red", texto: "vermelho" },
    g: { color: "green", texto: "verde" },
    b: { color: "blue", texto: "azul" },
    y: { color: "yellow", texto: "amarelo" },
    p: { color: "purple", texto: "roxo" },
    
};
document.addEventListener("keydown", function(e){
    const tecla = e.key.toLowerCase
    if (e.key.toLowerCase() === "x"){
        document.body.style.background = "none"
        document.body.innerHTML = "cor removida"
    }

    if (cors[tecla]){
        document.body.style.backgroundColor = cors[tecla].color
        document.body.innerHTML = cors[tecla].texto

        const corRGB = getComputedStyle(document.body).backgroundColor
        console.log("Cor aplicada (RGB):", corRGB)
    }
})


//09
const cor = [
    { color: "red", texto: "vermelho" },
    { color: "green", texto: "verde" },
    { color: "blue", texto: "azul" },
    { color: "yellow", texto: "amarelo" },
    { color: "purple", texto: "roxo" },
    
];
let indiceAtual = 0;

document.addEventListener("keydown", (a) => {
    const corAtual = cor[indiceAtual];
    const tecla = a.key.toLowerCase();

    if (tecla === "x"){
        document.body.style.background = "none"
        document.body.innerHTML = "cor removida"
    }
    
    document.body.style.backgroundColor = corAtual.color
    document.body.innerHTML = corAtual.texto

    
    const corRGB = getComputedStyle(document.body).backgroundColor
    console.log("Cor aplicada (RGB):", corRGB)

    
    indiceAtual = (indiceAtual + 1) % cor.length
});
//10
document.addEventListener("keydown", (b) => {
    const tecla = b.key.toLowerCase();

    if (tecla === "n") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.innerHTML = "Modo escuro ativado";

        const corRGB = getComputedStyle(document.body).backgroundColor;
        console.log("Cor aplicada (RGB):", corRGB);
    }

    if (tecla === "d") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.innerHTML = "Modo claro ativado";

        const corRGB = getComputedStyle(document.body).backgroundColor;
        console.log("Cor aplicada (RGB):", corRGB);
    }
    if (tecla === "x"){
        document.body.style.background = "none"
        document.body.innerHTML = "cor removida"
    }
});