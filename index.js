// JavaScript
const symbols = document.querySelectorAll(".logos");

function handleSymbolClick(event) {
  symbols.forEach((symbol) => symbol.classList.remove("active"));
  event.target.classList.add("active");
}

symbols.forEach((symbol) => {
  symbol.addEventListener("click", handleSymbolClick);
});

let imagen = document.getElementById('imagen');

function buscar() {
  let Pokm = document.getElementById('pokemon').value;
  buscarPokemon(Pokm);
}

function buscarPokemon(Pokm) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Pokm.toLowerCase()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("El Pokémon no fue encontrado.");
      }
      return response.json();
    })
    .then((data) => {
      const sprite = data.sprites.front_default;
      document.getElementById('nombrePokemon').textContent = data.name;
      document.getElementById('idPokemon').textContent = data.id;
      const tipos = data.types.map((tipo) => tipo.type.name).join(`, `);
      document.getElementById('tipoPokemon').textContent = tipos;
      const stats = data.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(`,`);
      document.getElementById('pokeStatus').textContent = stats;
      imagen.setAttribute('src', sprite);
    })
    .catch((error) => {
      console.error("Error al buscar el Pokémon:", error.message);
      alert("El Pokémon no fue encontrado o hubo un error en la búsqueda.");
    });
}

const pokemonContainer = document.querySelector("pokemon-container");


let limit = 300;
let offset = 1;


function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const compCard = document.createElement("div");
  compCard.classList.add("comp-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  compCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);


  cardContainer.appendChild(card);
  pokemonContainer.appendChild(compCard);
}

fetchPokemons(offset, limit);