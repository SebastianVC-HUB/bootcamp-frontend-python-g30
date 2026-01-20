// TODO: Listar los pokemons en la consola usando la pokeapi
// https://pokeapi.co/api/v2/pokemon 

 // fetch -> Devuelve una promesa

// fetch('https://pokeapi.co/api/v2/pokemon') 
//     .then(response => response.json())
//     .then(data => console.log(data))

const fetchPokemons = async () => {
    // const API_URL = 'https://pokeapi.co/api/v2/pokemon'
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=6&offset=0'
    const response = await fetch(API_URL) // Devuelve una promesa

    const data = await response.json() // Convierte la respuesta en formato JS Object

    // TODO: Agregar el id a cada pokemon dentro del arreglo results para usarlo en la imagen del pokemon

    const dataResults = data.results.map(pokemon => {
        const id = pokemon.url.split('/').at(6)
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

        return {
            ...pokemon, //name, url
            id,
            image
        }
    })

    return {
        ...data, // count, next, previous, results
        results: dataResults
    }
}

//Renderizar las funciones es tomar los datos que se procesan y mostrarlos en pantalla y si hubiera alguna modificación de la misma manera.

const renderPokemons = (pokemons = []) => {
    const pokemonsList = document.querySelector('#pokemonList')

    let elements = ''

    // TODO: Necesitamos agregar una imagen a cada pokemon

    pokemons.forEach(pokemon => {
        elements += `
            <article class="pokemon-item">
                <h2>${pokemon.name}</h2>
                <img
                    src="${pokemon.image}"
                    width="80"
                    height="80"
                />
                <div class="pokemon-item__buttons">
                    <button>
                        <img src="images/icon-star.svg"  width="16"/>
                    </button>
                                                          <button>
                        <img src="images/icon-edit.svg"  width="16"/>
                    </button>
                </div>
            </article>
        
        `
    })

    pokemonsList.innerHTML = elements

}

fetchPokemons()
    .then(data => {
        console.log (data.results)
        renderPokemons(data.results)
    })