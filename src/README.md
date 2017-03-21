# Códigos de ejemplo

## Ejecución

Para la ejecución de estos ejemplos basta con clonar el repo, instalar las dependencias y ejecturar **"gulp nombre_del_ejemplo"**. Por ejemplo:

         gulp ejemplo
         gulp ejemplo1
         gulp ejemplo2

## Ejemplo

En este ejemplo tenemos un servidor muy básico para colgar una pagina web almacenada en la carpeta "prueba".

## Ejemplo1

En este ejemplo creamos un servidor express y al acceder a la raíz nos muestra un "Hello World".

## Ejemplo2

Hacemos de servidor para la carpeta "prueba" que contiene un fichero html con un "hola mundo!". Al ejecutar el ejemplo, podemos acceder a **localhost:3000** y nos saldra por pantalla "Hello world!" como respuesta a la petición **get**.

Sin embargo, tenemos un middleware que nos permite acceder a **localhost:3000/static/index** y aquí se mostrará la página (fichero .html) que tenemos almacenada en la carpeta "prueba". Básicamente creamos una ruta a la que el cliente puede acceder, que no tiene porque corresponder con la ruta real donde se encuentre la página.
