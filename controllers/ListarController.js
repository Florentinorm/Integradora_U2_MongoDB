'use strict';
const GrupoSchema = require('../model/Grupo.js');
const AsignaturaSchema = require('../model/Asignatura.js');
const CursoSchema = require('../model/Curso.js');
const PeriodoSchema = require('../model/Periodo');
const TemaSchema = require('../model/Tema');
const ActividadSchema = require('../model/Actividad');
const ExamenSchema = require('../model/Examen');
const ParcialSchema = require('../model/Parcial');
const { Cursor } = require('mongodb');
const Examen = require('../model/Examen');

const ConsultasController = {};
//Tablero Docente
ConsultasController.listar = async (req, res) => {
    const Grupo = await GrupoSchema.find();
    const Asignatura = await AsignaturaSchema.find();
    const Curso = await CursoSchema.find();
    const Periodo = await PeriodoSchema.find();
    res.render('tablero', { Grupo, Asignatura, Curso, Periodo });
}
//Crear Curso
ConsultasController.curso = async (req, res) => {
    const Grupo = await GrupoSchema.find();
    const Asignatura = await AsignaturaSchema.find();
    const Curso = await CursoSchema.find();
    const Periodo = await PeriodoSchema.find();
    res.render('index', { Grupo, Asignatura, Curso, Periodo });
}

// Insertar Curso
ConsultasController.insertar = async (req, res, next) => {
    const Curso = new CursoSchema(req.body);
    await Curso.save();
    res.redirect('/crearCurso');
}

//Editar
ConsultasController.editarCuros = async (req, res, next) => {
    const Curso = await CursoSchema.findById(req.params.id);
    const Grupo = await GrupoSchema.find();
    const Asignatura = await AsignaturaSchema.find();
    res.render('editarC', { Curso, Grupo ,Asignatura });
}
ConsultasController.editarP = async (req, res, next) => {
    const { id } = req.params;
    await CursoSchema.update({_id: id}, req.body);
    res.redirect('/crearCurso');
}

//Eliminar
ConsultasController.eliminar = async (req, res, next) => {
    let { id } = req.params;
    await CursoSchema.remove({_id: id});
    res.redirect('/crearCurso');
}

// Agregar Contenido al curso
ConsultasController.editarContenido = async (req, res, next) => {
    const Curso = await CursoSchema.findById(req.params.id);
    const Periodo = await PeriodoSchema.find();
    const Tema = await TemaSchema.find();
    const Actividad = await ActividadSchema.find();
    const Parcial = await ParcialSchema.find();
    const Examen = await ExamenSchema.find();
    res.render('contenido', { Curso,Periodo,Tema,Parcial,Actividad,Examen });
}
//Planear Curso
ConsultasController.planearCurso = async (req, res, next) => {
    const Curso = await CursoSchema.findById(req.params.id);
    const Periodo = await PeriodoSchema.find();
    const Tema = await TemaSchema.find();
    const Actividad = await ActividadSchema.find();
    const Examen = await ExamenSchema.find();
    const Parcial = await ParcialSchema.find();
    res.render('planear', { Curso,Periodo,Tema,Parcial,Actividad,Examen });
}


// Tema
ConsultasController.tema = async (req, res, next) => {
    const Tema = new TemaSchema(req.body);
    await Tema.save();
    res.redirect('/crearCurso');
}
//Editar tema
ConsultasController.fechasT = async (req, res, next) => {
    const Tema = await TemaSchema.findById(req.params.id);
    res.render('editar/fechasT', { Tema});
}
ConsultasController.temaEdit =async (req, res, next) => {
    const { id } = req.params;
    await TemaSchema.update({_id: id}, req.body);
    res.redirect('/crearCurso');
}
// Eliminar Tema
ConsultasController.temaDelete = async (req, res, next) => {
    let { id } = req.params;
    await TemaSchema.remove({_id: id});
    res.redirect('/crearCurso');
}

// Actividades
ConsultasController.contenido = async (req, res, next) => {
    const Actividad = new ActividadSchema(req.body);
    await Actividad.save();
    res.redirect('/crearCurso');
}
// Editar Actividades
ConsultasController.fechas = async (req, res, next) => {
    const Actividad = await ActividadSchema.findById(req.params.id);
    res.render('editar/fechas', { Actividad});
}
ConsultasController.contenidoEdit =async (req, res, next) => {
    const { id } = req.params;
    await ActividadSchema.update({_id: id}, req.body);
    res.redirect('/crearCurso');
}
// Eliminar Actividades
ConsultasController.contenidoDelete = async (req, res, next) => {
    let { id } = req.params;
    await ActividadSchema.remove({_id: id});
    res.redirect('/crearCurso');
}
// Examen
ConsultasController.examen = async (req, res, next) => {
    const Examen = new ExamenSchema(req.body);
    await Examen.save();
    res.redirect('/crearCurso');
}
// Editar Examen
ConsultasController.fechasE = async (req, res, next) => {
    const Examen = await ExamenSchema.findById(req.params.id);
    res.render('editar/fechasE', { Examen});
}
ConsultasController.examenEdit = async (req, res, next) => {
    const { id } = req.params;
    await ExamenSchema.update({_id: id}, req.body);
    res.redirect('/crearCurso');
}
// eliminar examen
ConsultasController.examenDelete = async (req, res, next) => {
    let { id } = req.params;
    await ExamenSchema.remove({_id: id});
    res.redirect('/crearCurso');
}

module.exports = ConsultasController;