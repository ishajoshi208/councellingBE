const mongoose = require("mongoose");

var emotionSchema = mongoose.Schema({
    emotion : [{
        type: String
    }]
});

module.exports = mongoose.model('emotion',emotionSchema)