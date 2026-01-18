# Asincronía

### Asincronía en JS

JS no espera a que algo lento termine

```js
    console.log('Empezando mi programa')

    setTimeout(()=>{
        console.log('Esta línea tardará 2 segundos o 2000ms')
    }, 2000);

    console.log('Fin de mi programa')
Empezando mi programa
Esta línea tardará 2 segundos o 2000ms
Fin de mi programa
```
### API

    Una API es un mensajero que lleva pedidos(peticiones) y trae respuestas (resultado de haber pedido algo).

    Nuestras aplicaciones web, no va directo a la base de datos.
    Nuestra aplicación web siempre habla con una API.
    API es básicamente una interfaz una forma como comunicarnos desde nuestra aplicación con algún servicio.
    Ejemplo: Cliente -> Mesero (API) -> Cocina (BACKEND o BASE DE DATOS)
###

### HTTP + Verbos HTTP
    HTTP -> Es un protocolo de comunicación (Hypertext Transfer Protocol)

    HTTP es el lenguaje que usan las aaplicaciones web para comunicarse.
    La forma en que mandamos la información de un punto a otro.
    Ejemplos:
    http://127.0.0.1:5500/semana08/dia01-01-js-http-peticiones-fetch/index.html
    https://youtube.com

###

### Verbos HTTP
    Con estos verbos o propiedades nosotros le decimos al servidor que acción queremos efectuar.
    GET -> Obtener datos.
    POST -> Crear datos.
    PUT -> Actualizar datos.
    PATCH -> Nos permite actualizar datos pero de una forma más atómica.
    DELETE -> Eliminar datos.
###