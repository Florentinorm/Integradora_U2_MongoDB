const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParcialSchema = Schema({
    NumeroParcial: { type: Number, enum: [1, 2, 3] },
    FechaInicio: { type: Date, default: Date.now },
    FechaFin: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Parcial', ParcialSchema);