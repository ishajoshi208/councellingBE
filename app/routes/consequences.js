const consequence = require("../controllers/consequences");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports = [
    {
        path: '/consequences/:userId',
        method: 'POST',
        controller:  [passport.authenticate('jwt', { session: false }),consequence.createConsequences]

    }
]