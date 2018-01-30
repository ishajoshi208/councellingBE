const dispute = require("../controllers/disputes");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports = [
    {
        path: '/disputes/:userId',
        method: 'POST',
        controller:  [passport.authenticate('jwt', { session: false }),dispute.createDisputes]

    }
]