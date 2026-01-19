// Asincronía

// JS no espera a que algo lento termine
// JS sigue ejecutando mientras algo se procesa en segundo plano.

console.log('Empezando mi programa')

setTimeout(()=>{
    console.log('Esta línea tardará 2 segundos o 2000ms')
}, 2000);

console.log('Fin de mi programa')

// Formato JSON 

console.log(JSON.stringify({ name: 'Alonso' }))
console.log(JSON.parse('{ "name": "Alonso" }'))

// OBJETIVO: Traer información en formato JSON desde una URL

const url = "https://jsonplaceholder.typicode.com/todos"

// console.log(fetch(url)) // Devuelve una promesa (Promise)

// Estados de una promesa -> pending (se esta procesando el llamado), fulfilled (ya la información llego) y rejected (la información llego pero con algún problema)

//fetch(url)
//    .then(response => response.json()) // Se ejecuta cuando la respuesta llego correctamente y además convertimos la respuesta a un objeto JS.
//    .then(data =>{
//        console.log(data) // Aquí podemos usar el objeto JS
//        console.log(data[0].title)
//    })

const renderTodos = (todos = []) => {
    const divApp = document.querySelector('#app')

    let todoList = ''

    todos.forEach(todo => {
        todoList += `<h2>${todo.id} - ${todo.title}</h2>`
    })

    divApp.innerHTML = todoList
}

renderTodos()

fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        renderTodos(data)
    })
