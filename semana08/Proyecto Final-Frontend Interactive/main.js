const LIMIT = 10

let page = 1
let totalPages = 0
let count = 0

let dragonballFavorites = JSON.parse(localStorage.getItem('dragonball-favorites')) ?? []

const fetchDragonballs = async (page = 1) => {
    const API_URL = `https://dragonball-api.com/api/characters?page=${page}&limit=${LIMIT}`
    const response = await fetch(API_URL) 
    const data = await response.json() 

    // Mapeo igual al de la clase de Pokemon
    const dataResults = data.items.map(character => {
        const foundFavorite = dragonballFavorites.find(favorite => favorite.id == character.id)
        
        return {
            ...character, 
            isFavorite: Boolean(foundFavorite)
        } 
    })

    // Seteo de variables de paginación
    count = data.meta.totalItems
    totalPages = data.meta.totalPages

    return {
        ...data,
        results: dataResults
    }
}

const toggleFavorite = async (id, name, image) => {
    const foundDragonballFavorite = dragonballFavorites.filter(
        favorite => favorite.id === id
    )
    const existDragonballFavorite = foundDragonballFavorite.length > 0

    if(existDragonballFavorite){
        dragonballFavorites = dragonballFavorites.filter(char => char.id != id)
    } else {
        dragonballFavorites.push({id, name, image })
    }

    localStorage.setItem('dragonball-favorites', JSON.stringify(dragonballFavorites))

    const data = await fetchDragonballs(page)
    renderDragonballs(data.results)
}

const renderDragonballs = (dragonballs = []) => {
    const dragonballsList = document.querySelector('#dragonballList')
    let elements = ''

    dragonballs.forEach(char => {
        elements += `
            <article class="dragonball-item">
                <div class="dragonball-item-image">
                    <img src="${char.image}" alt="${char.name}" loading="lazy">
                </div>
                <div class="dragonball-item-info">
                    <h2>${char.name}</h2>
                    <p><strong>Raza:</strong> ${char.race}</p>
                    <p><strong>Género:</strong> ${char.gender}</p>
                </div>
                <div class="dragonball-item-actions">
                    <button onclick="toggleFavorite(${char.id}, '${char.name}','${char.image}')" class="dragonball-fav-btn">
                        <svg class="${char.isFavorite ? 'is-favorite' : ''}" 
                            width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
            </article>
        `
    })

    dragonballsList.innerHTML = elements
    document.querySelector('#currentPage').textContent = `Página ${page} de ${totalPages}`
    document.querySelector('#numberDragonballs').textContent = `Favoritos: ${dragonballFavorites.length}`
}

// Eventos de botones (Igual que en clase)
document.querySelector('#nextPage').addEventListener('click', async () => {
    if (page < totalPages) {
        page++
        const dataDragonballs = await fetchDragonballs(page)
        renderDragonballs(dataDragonballs.results)
    }
})

document.querySelector('#prevPage').addEventListener('click', async () => {
    if(page > 1){
        page--
        const dataDragonballs = await fetchDragonballs(page)
        renderDragonballs(dataDragonballs.results)
    }
})

document.querySelector('#firstPage').addEventListener('click', async () => {
    page = 1
    const dataDragonballs = await fetchDragonballs(page)
    renderDragonballs(dataDragonballs.results)
})

document.querySelector('#lastPage').addEventListener('click', async () => {
    page = totalPages
    const dataDragonballs = await fetchDragonballs(page)
    renderDragonballs(dataDragonballs.results)
})

// Carga inicial estilo clase
fetchDragonballs()
    .then(data => {
        renderDragonballs(data.results)
    })