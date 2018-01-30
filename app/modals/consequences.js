var mongoose = require('mongoose');

var consequenceSchema = mongoose.Schema({
    consequence: [{ type: String }]
})
module.exports = mongoose.model('consequence', consequenceSchema);