const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const resistenciaSchema = new Schema({
    index: String,
    configuration: String,
    R1: String,
    R2: String,
    RT: String
});

//crear modelo
const Resistencia = mongoose.model('Resistencia', resistenciaSchema);

module.exports = Resistencia;