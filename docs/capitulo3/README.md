# Using Middleware

## Introducción

En este capítulo veremos como responde una aplicación a una petición del cliente, es decir, cuando el cliente accede a una ruta dada.

## Ejemplo básico para despliegue de un Gitbook

```javascript
   var express = require('express')
   var app = express()

   app.use('/static/index', express.static('gh-pages'))

   app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
   })
```
