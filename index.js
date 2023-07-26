
const symbols = document.querySelectorAll(".logos");

function handleSymbolClick(event) {
   
    symbols.forEach((symbol) => symbol.classList.remove("active"));

    event.target.classList.add("active");
}

symbols.forEach((symbol) => {
    symbol.addEventListener("click", handleSymbolClick);
});
let imagen = document.getElementById('imagen');
// const pokeCarta = document.getElementById('pokeCarta');
// const nombrePokemon = document.getElementById('nombrePokemon');
// const imagen = document.getElementById('imagen');
// const idPokemon = document.getElementById('idPokemon');
// const tipoPokemon = document.getElementById('tipoPokemon');
// const pokeStatus = document.getElementById('pokeStatus');

function buscar() {
    let Pokm = document.getElementById('pokemon').value;
buscarPokemon(Pokm);
}
function buscarPokemon(Pokm){
    let postRequest = fetch(`https://pokeapi.co/api/v2/pokemon/${Pokm.toLowerCase()}`,
{
    method:'GET',
}
);
postRequest.then((value) => {
    alert('Registro encontrado');
    return value.json();
}).then((valueJson) => { 
const sprite = valueJson.sprites.front_default;
document.getElementById('nombrePokemon').innerHTML = valueJson.name;
// document.getElementById('src',).
document.getElementById('idPokemon').innerHTML = valueJson.id;
document.getElementById('tipoPokemon').innerHTML = valueJson.type;
document.getElementById('pokeStatus').innerHTML = valueJson.status;
imagen.setAttribute('src',sprite);
}).catch((errorValue)=> {
alert(errorValue);
});  
}