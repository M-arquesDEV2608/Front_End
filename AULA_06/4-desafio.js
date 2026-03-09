//1

async function totalRacas() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  const racas = Object.keys(data.message);

  console.log("Total de raças:", racas.length);
}

totalRacas();

console.log("-----------------------------")

//2
async function racasComSubRacas() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  const breeds = data.message;

  for (const breed in breeds) {
    const subBreeds = breeds[breed];

    if (subBreeds.length > 0) {
      console.log(`${breed}:`, subBreeds);
    }
  }
}

racasComSubRacas();

console.log("-----------------------------")

//3
async function racaComMaisFotos() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();

  const racas = Object.keys(data.message);

  let maiorQuantidade = 0;
  let racaComMaisFotos = "";

  for (const raca of racas) {
    const res = await fetch(`https://dog.ceo/api/breed/${raca}/images`);
    const dados = await res.json();

    const totalFotos = dados.message.length;

    if (totalFotos > maiorQuantidade) {
      maiorQuantidade = totalFotos;
      racaComMaisFotos = raca;
    }
  }

  console.log("Raça com mais fotos:", racaComMaisFotos);
  console.log("Quantidade de fotos:", maiorQuantidade);
}

racaComMaisFotos();