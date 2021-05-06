const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrupoSchema = Schema({
    Nombre: String,
    Carrera: String,
    Semestre: Number
});

module.exports = mongoose.model('Grupo', GrupoSchema);