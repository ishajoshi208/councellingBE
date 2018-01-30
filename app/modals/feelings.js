const mongoose = require("mongoose");

var feelingSchema = mongoose.Schema({
    feeling : [{
        type: String
    }]
});

module.exports = mongoose.model('feeling',feelingSchema)