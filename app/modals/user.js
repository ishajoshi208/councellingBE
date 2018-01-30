var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var user = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    passwordGroup: {
        password: { type: String },
        re_password: { type: String },
    },
    phone: { type: String },
    user_type: { type: String },
    token: { type: String },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    },
    beliefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'belief'
    },
    consequenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'consequence'
    },
    disputeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dispute'
    },
    emotionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'emotion'
    },
    feelingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feeling'
    }

})
var User = module.exports = mongoose.model('user', user);

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.passwordGroup.password, salt, function (err, hash) {
            // Store hash in your password DB. 
            newUser.passwordGroup.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function (username, callback) {
    var query = { username: username };
    User.findOne(query, callback);
    console.log()
}


module.exports.getUserById = function (id, callback) {
    User.findById(id, callback)
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) {
            console.log(err)
        }
        callback(null, isMatch)
    })
}