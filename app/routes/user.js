const userControllers=require("../controllers/user");
// const authenticate = require('../../authenticate');
// const passport = require('passport')
// , LocalStrategy = require('passport-local').Strategy;

module.exports=[
    {
        path:'/user/:id',
        method:'GET',
        controller:userControllers.getUser
    },
    {
        path:'/user',
        method:'POST',
        controller:userControllers.createUser
    }
    // {
    //     path:'/user',
    //     method:'PUT',
    //     controller:userControllers.updateUser
    // }
]