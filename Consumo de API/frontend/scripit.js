const gameImage = document.getElementById("gameImage")

const breedName = document.getElementById("breedName")

const randomBtn = document.getElementById("randomBtn")

const searchBtn = document.getElementById("searchBtn")

const breedInput = document.getElementById("breedInput")

const genreArea = document.querySelector(".genre-area")

const API = "http://localhost:3000/api/jogos"

async function buscarJogo(url) {
    genreArea.classList.add("loading")

    try{
        const response = await fetch(url)

        const respo = await response.json()

        console.log("Resposta da API:", respo)

        if (respo.status === "error") {
            breedName.textContent = respo.message

            genreImage.src = ""

            return
        }

        genreImage.src = respo.message

        const partes = respo.message.split("/")

        const genero = partes[5]

        breedName.textContent =
            genero.charAt(0).toUpperCase() + genero.slice(1)
    } catch (erro) {
        console.error(erro)

        breedName.textContent = 
            "⚠️ Servidor offline — rode: node server.js"

        genreImage.src = ""
    } finally {

        genreArea.classList.remove("loading")
    }
}

function jogoAleatorio(){

    exeplorarJogo(`${API}/aleatorio`)
}

function exeplorarPorGenero() {
    const genero = breedInput.ariaValueMax.trim().toLowerCase()

    if(!genero){
        alert("Digiti um Gênero!")

        return
    }

    exeplorarJogo(`${API}/${genero}`)
}

randomBtn.addEventListener("click", jogoAleatorio)

searchBtn.addEventListener("click", exeplorarPorGenero)

genreImage.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        exeplorarPorGenero()
    }
})

jogoAleatorio()