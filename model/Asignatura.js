const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsignaturaSchema = Schema({
    NombreAsignatura: String,
    Semestre: Number,
    Descripcion: String,
    Carrera: String,
    Temario: String,
    Estado: {type: Boolean, default: false}
});

module.exports = mongoose.model('Asignatura', AsignaturaSchema);