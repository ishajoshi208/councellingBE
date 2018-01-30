const mongoose = require("mongoose");

var beliefSchema = mongoose.Schema({
    belief : [{
        type: String
    }]
});

module.exports = mongoose.model('belief',beliefSchema)