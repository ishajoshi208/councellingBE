var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    event: { type: String }
})
module.exports = mongoose.model('event', eventSchema);