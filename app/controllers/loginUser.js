const User = require('../modals/user');
const generateToken = require('./../../config/auth/generateToken');

module.exports = {
    async loginUser(req, res) {
        var token = generateToken.getToken({ _id: req.user._id })
        res.statusCode = 200;
        res.json({
            success: true,
            data: req.user._id,
            token: token,
            status: "Login Successful"
        })
    }
}