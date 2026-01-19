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
