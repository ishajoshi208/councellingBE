const bodyparser = require("body-parser");
const cors = require("cors");
const passportMiddleware = require("./passport");
const passport = require('passport');
module.exports = {
    configMiddleware1(app) {
        app.use(bodyparser.urlencoded({ extended: true }));
        app.use(bodyparser.json());
        app.use(cors());
    },
    congifMiddleware2(app){
        app.use(passport.initialize());
        passportMiddleware.configPassport(passport);
    }
}