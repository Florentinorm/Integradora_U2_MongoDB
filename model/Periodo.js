const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeriodoSchema = Schema({
	NombrePeriodo: String,
	FechaInicio: {type:Date, default: Date.now},
	FechaFin: {type:Date, default: Date.now},
	Estado: {type: Boolean, default: false}
});

module.exports = mongoose.model('Periodo', PeriodoSchema);