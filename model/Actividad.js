const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActividadSchema = Schema({
    Nombre: { type: String, minLength: 3, maxLength: 100},
    Numero: { type: Number, min: 1, max: 10 },
    Tipo: { type: String, enum: ['Infografia', 'Video', 'Practica', 'Tarjeta'] },
    Ponderacion: { type: Number, min: 0, max: 10 },
    Ruta: String,
    FechaInicio: { type: Date, default: Date.now },
    FechaFin: { type: Date, default: Date.now },
    Descripcion: { type: String, minLength: 3, maxLength: 200 },
    NumPreguntas: Number,
    CvTema:{type: mongoose.Types.ObjectId}
});

module.exports = mongoose.model('Actividad', ActividadSchema);