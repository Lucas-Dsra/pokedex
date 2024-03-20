const   pokeApi = {}

pokeApi.getDetainsPokemons = (pokemon) => {
    return  fetch(pokemon.url).then((response) => response.json())
}

function openApiConvertModel (pokemonsDetains){
    const pokemon = new Pokemon ()
    pokemon.name = pokemonsDetains.name
    pokemon.number = pokemonsDetains.order

    const types = pokemonsDetains.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonsDetains.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getDetainsPokemons = (pokemon) => {
    return fetch (pokemon.url)
     .then((response) => response.json())
        .then(openApiConvertModel)
}



pokeApi.getPokemons = (limit, offset) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return  fetch(url)
        .then ((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getDetainsPokemons))
        .then((detainsRequest) => Promise.all(detainsRequest))
        .then((pokemonsDetains) => (pokemonsDetains))
        .catch((erro) => console.error(erro))

        
}


