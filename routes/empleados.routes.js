//En este archivo vamos a crear una REST API que sirva para escuchar las peticiones que vengan desde Angular

const { Router } = require('express'); //Importamos la funcionalidad "Router" que sirve para la creación de rutas
const router = Router(); //Sirve para crear multiples rutas y mantenerlas en archivos separados

const empleadosController = require('../controllers/empleados.controller');
//CRUD = CREATE, READ, UPDATE y DELETE

router.get('/', empleadosController.obtenerEmpleados); //Ruta de REST API para obtener lista de empleados
router.post('/', empleadosController.crearEmpleado);//Ruta de REST API para crear un empleado nuevo (agregar un nuevo empleado)
router.get('/:id', empleadosController.obtenerEmpleado); //Ruta de REST API para obtener un empleado en especifico. //Con los ":" estamos diciendo que estamos recibiendo un parametro desde el cliente, y cuya información estamos almacenando en "id"
router.put('/:id', empleadosController.actualizarEmpleado); //Ruta de REST API para actualizar información de un empleado en especifico. ////Con los ":" estamos diciendo que estamos recibiendo un parametro desde el cliente, y cuya información estamos almacenando en "id"
router.delete('/:id', empleadosController.eliminarEmpleado); //Ruta de REST API para eliminar un empleado en especifico. ////Con los ":" estamos diciendo que estamos recibiendo un parametro desde el cliente, y cuya información estamos almacenando en "id"


module.exports = router;