const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = Schema({
    Nombre : {type:String,minLength:3, maxLength: 100,index: true},
	Descripcion: {type:String, minLength:3, maxLength: 200},
	Estado: {type: Boolean, default: false},
	EsPlaneado:  {type: Boolean, default: false},
	CvAsignatura: {type: mongoose.Types.ObjectId},
	CvGrupo: {type: mongoose.Types.ObjectId},
	CvPeriodo: {type: mongoose.Types.ObjectId},
	Imagen: String,
});

module.exports = mongoose.model('Curso', CursoSchema);