//En este archivo vamos a poder solo código del servidor.

const express = require('express');
const app = express(); /*Servidor*/ /*Importamos el archivo que se encarga de CONFIGURAR el SERVIDOR*/ /* Ahora ya podemos usar el modulo EXPRESS */
const morgan = require("morgan"); //Sirve para que podamos ver las peticiones HTTP que van llegando al servidor
const cors = require('cors'); //Nos sirve para poder aceptar otras peticiones que vienen de otros servidores

//Settings (Configuraciones)
app.set('port', process.env.PORT || 3000) /*Puerto*/ /* La razón por la que no creamos simplemente una constante con el valor del puerto es que cada vez que llamemos a la constante que almacena el servidor(app) tendremos acceso al valor del puerto*/ /*"process.env.PORT || 4000" si en mi PC hay un puerto definido para eso entonces tomalo, pero sino existe entonces usa el puerto 4000*/

//Middlewares (son funciones que se ejecutan antes que las procesen algo)
app.use(cors({origin: "http://localhost:4200"})); //Definimos que aceptaremos peticiones que vengan de "localhost:4200", es el cual es nuestro servidor de Angular. //Si no le colocamos la propiedad "origin" va a aceptar cualquier tipo de petición.
app.use(morgan('dev')); //Comenzamos a usar el modulo "Morgan". "dev" es para indicar que está en modo de desarrollo
app.use(express.json()); //El método "express.json()" le permite a nuestro servidor poder comenzar a recibir formatos JSON y poder comprenderlos
app.use(express.urlencoded({extends: false})); //Si llegamos a tener formulario vamos a poder aceptar esos datos que están enviando. //"extended: false" es para decirle al servidor que solo vamos a aceptar los datos en formato JSON, no imagenes ni nada de eso, SOLO JSON


//Routes (Rutas)
app.use('/api/empleados', require('./routes/empleados.routes.js')); //importamos el archivo donde tenemos las rutas. //Con "require('./routes/empleados.routes.js')" importamos y especificamos la ruta, pero con "app.use" hacemos que podamos usar las rutas que creamos en aquél documento 


module.exports = app;