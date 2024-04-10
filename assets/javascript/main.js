const  childPokemonOl = document.getElementById('pokemonList')
const loadItem = document.getElementById('load')
const limit = 5;
let offset = 0;

function orderFormart(pokemosOrder){
  if (pokemosOrder < 10) {
      return`#00${pokemosOrder}`
  }else if (pokemosOrder < 100) {
      return`#0${pokemosOrder}`
  } else{
      return`#${pokemosOrder}`
  } 
}
function createPokemonList (pokemon) {
    return`
    <li class="${pokemon.type}">
    <div class="name_and_id">
        <span class="number_${pokemon.type}">${orderFormart(pokemon.number)}</span>
        <span class="name_pokemon">${pokemon.name}</span>
    </div>
    <div class="img_and_types">
        <ol class="types">
            ${pokemon.types.map((types) =>  `<li class="type${pokemon.type}">${types}</>`).join('')}
        </ol>
         <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div> 
    </li>
    `
}
function loadPokemon(limit,offset){
    pokeApi.getPokemons(limit, offset).then((pokemonItens = []) => {
        const newHTML = pokemonItens.map(createPokemonList).join('')
        childPokemonOl.innerHTML += newHTML
    })
}

loadPokemon(limit, offset)

loadItem.addEventListener('click', () => {
    offset += limit
    loadPokemon(limit, offset)
})