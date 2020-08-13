'use strit';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String, // [String]
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documentos en la colección