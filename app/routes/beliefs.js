const belief = require("../controllers/beliefs");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports = [
    {
        path: '/beliefs/:userId',
        method: 'POST',
        controller:  [passport.authenticate('jwt', { session: false }),belief.createBelief]

    }
]