/* 
1.
Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []

*/


const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const gifts2 = ['#broken', '#rusty']
const gifts3 = []


function RegalosSinDefectos(gifts){
    const giftsGood = []

    for (let i = 0; i < gifts.length; i++) {
        if(!gifts[i].includes('#')) {
            giftsGood.push(gifts[i])
        }
    }
    return giftsGood
}
console.log('Ejercicio 1 gifts1' , gifts1)
console.log('Ejercicio 1 gifts1 ' , RegalosSinDefectos(gifts1))

console.log('Ejercicio 1 gifts2' , gifts2)
console.log('Ejercicio 1 gifts2' , RegalosSinDefectos(gifts2))

console.log('Ejercicio 1 gifts3' , gifts3)
console.log('Ejercicio 1 gifts3' , RegalosSinDefectos(gifts3))

/*
2.
La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

toy: el nombre del juguete (string)
quantity: cuántas unidades hay que fabricar (number)
Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

Cada juguete repetido tantas veces como indique quantity
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)


const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []

*/

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const production3 = []

function manufactureGifts(giftsToProduce) {
    const giftStringList = []

    giftsToProduce.forEach((giftObject) => {
        if(giftObject.quantity > 0) {
            const repeatedNameGifts = (new Array(giftObject.quantity)).fill(giftObject.toy)
           giftStringList.push(...repeatedNameGifts)
        }

    })

    return giftStringList

}
console.log('Ejercicio 2 : production1',manufactureGifts(production1))
console.log('Ejercicio 2 : production2', manufactureGifts(production2))
console.log('Ejercicio 2 : production3',manufactureGifts(production3))

/*
3.
En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

🧩 Ejemplos
const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

/*
const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/
/*
const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/
/*
const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…

*/

const g1 = drawGift(4, '*')
//console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

 const g2 = drawGift(3, '#')
//console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
//console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
//console.log(g4)
// ""  pobre becario…

function drawGift(size, symbol) {
   if (size < 2) return ""
   
    const row = symbol.repeat(size) 
    const middle = symbol+ " ".repeat(size - 2)+ symbol + "\n"
   
    const gift = 
    row + "\n"
    + middle.repeat(size - 2) 
    + row + "\n"
    

    return gift
}

console.log(drawGift(2,g1))
console.log(drawGift(2,g2))
console.log(drawGift(2,g3))
console.log(drawGift(2,g4))


/*
4.
Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]

Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1

El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.

🧩 Ejemplos
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

*/

decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

function decodeSantaPin(code) {
    
    const code1 = code.substring(1,code.length-1)
    const newCodeArr = code1.split(["]["])
    if(newCodeArr.length !== 4) return null

    let res = ''
    /** here */
    newCodeArr.forEach((digitEncode) => {
        const firstSymbol = digitEncode[0]
        if(firstSymbol === '<') {
            if(res === '') return null
            res = res + res[res.length-1]
        } else {
            let digit = Number(digitEncode[0])
            for(let i = 1; i < digitEncode.length; i++) {
                if(digitEncode[i] === '+'){
                    digit = (digit+1) % 10
                }
                else {
                    digit = (digit-1) < 0 ? 9 : digit - 1 
                }
            }
            
            res = res + digit
        }
    })
    

    return res
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[9+][0-][4][<]'))
console.log(decodeSantaPin('[1+][2-]'))