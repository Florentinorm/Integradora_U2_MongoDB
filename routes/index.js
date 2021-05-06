var express = require('express');
var router = express.Router();
const {listar, insertar,eliminar, editarP, editarContenido, tema, 
    temaDelete, contenido, contenidoDelete, 
    examen, examenEdit, examenDelete, planearCurso, 
    temaEdit, curso, editarCuros, fechas,  fechasT, fechasE, contenidoEdit} = require('../controllers/ListarController');
const upload = require('../libs/storage');
/* GET home page. */

// vista Tablero
router.get('/', listar);
//Vista Crear Curso
router.get('/crearCurso',curso);
//Vista Planear
router.get('/planear/:id', planearCurso);
// Vista Contenido
router.get('/contenido/:id',editarContenido);

// insertar curso
router.post('/add', insertar );
//editar curso
router.get('/edit/:id', editarCuros);
router.post('/edit/:id', editarP);
// eliminar curso
router.get('/delete/:id',eliminar);

//Crear Tema
router.post('/addT', tema);
//Editar Tema
router.get('/editT/:id', fechasT);
router.post('/editT/:id', temaEdit);
//Borrar Tema
router.get('/deleteT/:id', temaDelete);
//Crear Actividades
router.post('/addC',upload.single('Ruta'), contenido);
//Editar Actividad
router.get('/editC/:id', fechas);
router.post('/editC/:id', contenidoEdit);
//Borrar Actividad
router.get('/deleteC/:id', contenidoDelete);

//Crear Examen
router.post('/addE', examen);
//Editar Examen
router.get('/editE/:id', fechasE);
router.post('/editE/:id', examenEdit);
//Borrar Examen
router.get('/deleteE/:id', examenDelete);

module.exports = router;
