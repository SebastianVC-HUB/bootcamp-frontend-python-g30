# Javascript ejercicios

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(oveja => {
    const nombre = oveja.name.toLowerCase().replace(/\s/g, '');
    return oveja.color === 'rojo' &&
           nombre.includes('n') &&
           nombre.includes('a');
  });
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);


// Respuesta deseada:

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```