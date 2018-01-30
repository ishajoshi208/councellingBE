const userControllers=require("../controllers/loginUser");
const authenticate = require('../middlewares/passport');
const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

module.exports=[
    // {
    //     path:'/user',
    //     method:'GET',
    //     controlle:userControllers.getUsers
    // },
    {
        path:'/login',
        method:'POST',
        controller:[passport.authenticate('local'),userControllers.loginUser]
    }
    // {
    //     path:'/user',
    //     method:'PUT',
    //     controller:userControllers.updateUser
    // }
]