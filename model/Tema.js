const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemaSchema = Schema({
    NombreTema: { type: String, minLength: 3, maxLength: 100, index: true },
    Descripcion: { type: String, minLength: 3, maxLength: 200 , default: null},
    FechaInicio: { type: Date, default: Date.now },
    FechaFin: { type: Date, default: Date.now },
    CvParcial: Number,
    CvCurso:  {type: mongoose.Types.ObjectId}
});

module.exports = mongoose.model('Tema', TemaSchema);