'use strict';
const CursoSchema = require('../model/Curso.js');
const PeriodoSchema = require('../model/Periodo');
const ParcialSchema = require('../model/Parcial');

const CursoController = {}

CursoController.insertarPar = async (req, res, next) => {
  const Parcial = new ParcialSchema(req.body);
  await Parcial.save();
  res.redirect('/');
}

module.exports = CursoController;