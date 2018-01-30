const feeling = require("../controllers/feelings");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports = [
    {
        path: '/feelings/:userId',
        method: 'POST',
        controller:  [passport.authenticate('jwt', { session: false }),feeling.createFeelings]

    }
]