const mongoose = require("mongoose");

var disputeSchema = mongoose.Schema({
    dispute : [{
        type: String
    }]
});

module.exports = mongoose.model('dispute',disputeSchema)