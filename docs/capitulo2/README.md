# Routing Guide

## Introducción

En este capítulo veremos como responde una aplicación a una petición del cliente.

## Métodos de routing

Los métodos de routing que usa express son derivados de los que usa HTTP y son:
```
get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, and connect
```
```javascript
   // GET method route
   app.get('/', function (req, res) {
      res.send('GET request to the homepage')
   })

   // POST method route
   app.post('/', function (req, res) {
      res.send('POST request to the homepage')
   })
```

## Declaración de rutas.
Podemos utilizar expresiones regulares para definir rutas, por ejemplo:
```javascript
   app.get(/.*fly$/, function (req, res) {
      res.send('Coincide con: /.*fly$/')
   })
```
Se imprimira en pantalla lo que esta dentro de **res.send()** al acceder a una ruta cuyo final tenga la cadena 'fly'.

## Parametros en rutas

      Route path: /users/:userId/books/:bookId
      Request URL: http://localhost:3000/users/34/books/8989
      req.params: { "userId": "34", "bookId": "8989" }

Vemos como podemos acceder a los parámetros de la ruta especificada en **Route patch**:
   * **:userId**
   * **:bookId**

En este ejemplo vemos el resultado final:
```javascript
   app.get('/users/:userId/books/:bookId', function (req, res) {
      res.send(req.params)
   })
```
Se mostrarían los valores que pusieramos en la ruta, por ejemplo:


      /users/:userId/books/:bookId
      /user/40/books/3453

Muestra los valores de esta manera:

      { "userId": "40", "bookId": "3453" }
