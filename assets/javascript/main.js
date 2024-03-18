const  childPokemonOl = document.getElementById('pokemonList')

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
pokeApi.getPokemons().then((pokemonItens) => {
    childPokemonOl.innerHTML += pokemonItens.map(createPokemonList).join('')

    // Podemos fazer desse modo, mas é muito verboso
        //    const listEmHTml = []
        //
        //        for (let i = 0; i < pokemonItens.length; i++) {
        //        const pokemon = pokemonItens[i];
        //        listEmHTml.push(createPokemonList (pokemon))
        //    }
        //
        //    console.log(listEmHTml)
        //
    })
    .catch((erro) => console.error(erro))

    



