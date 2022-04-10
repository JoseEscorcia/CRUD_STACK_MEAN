//Este es el archivo principal, es decir, el que arranca el servidor

require('./database'); //Llamamos la conexión con la base de datos que hicimos en el archivo "database.js"
const app = require('./app'); //Requerimos las configuraciones del servidor que hicimos en el archivo "app.js"


const server = app.listen(app.get('port'), () => { /*Servidor ejecutate en el puerto que definimos y cuando empieces a ejecutarte has tal cosa*/
    console.log('Server on port', app.get('port')); //Imprime en consola "Server on port" + el numero del puerto en el que se está ejecutando (ese dato lo obtenemos con "app.get('port')")
});

