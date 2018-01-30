const emotion = require("../controllers/emotions");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports = [
    {
        path: '/emotions/:userId',
        method: 'POST',
        controller:  [passport.authenticate('jwt', { session: false }),emotion.createEmotions]

    }
]