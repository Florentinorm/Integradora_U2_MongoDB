const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamenSchema = Schema({
    Ponderacion: { type: Number, min: 0, max: 10 },
    Duracion: { type: String, minLength: 1, maxLength: 200 },
    Nombre: { type: String, minLength: 3, maxLength: 100, index: true },
    FechaInicio: { type: Date, default: Date.now },
    FechaFin: { type: Date, default: Date.now },
    Intentos: Number,
    CvTema: {type: mongoose.Types.ObjectId}
});

module.exports = mongoose.model('Examen', ExamenSchema);