const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url)
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         console.log(data)
//         renderTodos(data)
//     })
//     .catch(error => {
//         // Sirve para controlar errores inesperados
//         console.log(error)
//     })

const fetchUsersSinRetorno = async () => {
    // Esta función se va a convertir en una función asincrona que va devolver una promesa
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
}

// fetchUsersSinRetorno()

// console.log(fetchUsersSinRetorno()) // Promise {<pending>}

const fetchUsersConRetorno = async () => { // Retorna una promesa  (Promise) 
    const response = await fetch(url)

    return await response.json()
}

fetchUsersConRetorno() // Retorna una promesa
    .then(users => console.log(users))