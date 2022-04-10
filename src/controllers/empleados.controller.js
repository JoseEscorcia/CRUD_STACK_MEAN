//En este archivo vamos a guardar porciones de código de las rutas
//para evitar que nuestro archivo "empleados.routes.js" se vuelva muy largo

const hello = (req, res) => res.send('Hello');


const empleadosCtrl = {}; //Creamos un objeto para almacenar aquí todas las porciones de código de las rutas para poder exportar

const Empleados = require('../models/empleados.js'); //Importamos toda la configuración del esquema de datos que definimos en el archivo "empleados.js"

//Crearemos las rutas para el CRUD ----------------------------------------------------------------------------
empleadosCtrl.obtenerEmpleados = async (req, res) => { //Ruta del API REST para obtener todos los empleados
    const empleados = await Empleados.find(); //Esto nos devolverá un arreglo de empleados, y esto es lo que vamos a devolver al FRONT-END
    res.json(empleados);
}    

empleadosCtrl.crearEmpleado = async (req, res) => { //Ruta del API REST para crear un empleado
    //Para poder crear un dato primero hay que recibirlo. Para recibir un dato en Express debemos usar el "req", el cual es la información que va enviando el cliente. "req.body" es el contenido que nos envían.
    const nuevoEmpleado = new Empleados(req.body); //Con "new Empleados(req.body)" estamos creando un nuevo empleado con los datos que nos han enviado desde el cliente.
    await nuevoEmpleado.save(); //Con ".save" guardamos.  //".save" es un método síncrono, por lo tanto debemos usar "async await"
    res.json({status: '¡Ha agregado un nuevo empleado!'});
}

empleadosCtrl.obtenerEmpleado = async (req, res) => { //Ruta del API REST obtener 1 empleado
    
    const empleado = await Empleados.findById(req.params.id); //Con "findById" buscamos un dato por el ID en MongoDB. //Con "req.params" estamos leyendo lo que nos envían por parametro en el URL desde el cliente. //En el archivo "empleados.routes.js" nosotros habiamos definido que para esta ruta estariamos recibiendo un parametro y lo guardariamos en una variable llamada "id".
    //"findById" es un método asincrono, así que debemos usar "Async Await".

    /* Esta es otra manera de buscar por ID en MongoDB
    Empleados.findOne({_id: req.params.id}); //Con "findOne" buscamos un dato en MongoDB. //Con "req.params" estamos leyendo lo que nos envían por parametro en el URL desde el cliente. //En el archivo "empleados.routes.js" nosotros habiamos definido que para esta ruta estariamos recibiendo un parametro y lo guardariamos en una variable llamada "id".
                       //"_id" vamos a buscar un dato que venga por id, y el valor del "id" será el que nos manden por parametro en el URL (req.params.id)
    */
    
    res.send(empleado);
}  

empleadosCtrl.actualizarEmpleado = async (req, res) => { //Ruta del API REST actualizar a 1 empleado
    await Empleados.findByIdAndUpdate(req.params.id,req.body); ////Con "findByIdAndUpdate" buscamos un dato por el ID y luego lo actualizamos. //"findByIdAndUpdate" recibe 2 paramatro: 1) el ID que vamos a buscar. 2) el contenido que queremos colocar (req.body)
    res.json({status: '¡Empleado Actualizado!'});
}

empleadosCtrl.eliminarEmpleado = async (req, res) => { //Ruta del API REST eliminar a empleado
    await Empleados.findByIdAndDelete(req.params.id); //"findByIdAndDelete" lo que hace es que busca un dato por un ID y luego lo elimina.
    //"findByIdAndDelete" es un método asincrono, así que debemos usar "Async Await".
    //Ahora bien, si guardamos "await Empleados.findByIdAndDelete(req.params.id);" en una constante nos estaría devolviendo al empleado que hemos eliminado.
   
    res.json({status: '¡Empleado Eliminado!'})
}
//-------------------------------------------------------------------------------------------------------------



module.exports = empleadosCtrl;