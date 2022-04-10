//Este archivo nos permitirá conectarnos al base de datos (MongoDB)
//Con el comando "mongod" en la consola vamos a encender mongoDB

const mongoose = require('mongoose'); //modulo encargado de comunicarse con MongoDB desde Javascript

mongoose.connect('mongodb://localhost/crud-empleados') //creamos una conexión con MongoDB
    .then(db => console.log('DB is connected')) //Después que se conecta vamos a imprimir por consola "DB is connected"
    .catch(err => console.log(err)); //Y si no se ha conectado vamos a capturar el error y lo mostramos por consola.

//Hasta este punto ya tenemos la conexión con la base de datos, ahora debemos usarla en el archivo principal, es decir, en el archivo "index.js" que arranca el servidor.