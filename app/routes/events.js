const event = require("../controllers/events");
const passport = require("passport");
const authenticate = require('../middlewares/passport');

module.exports =[
    // {
    //     path:'/events',
    //     method:'GET',
    //     // controlle:userControllers.getUsers
    // },
    {
        path:'/events/:userId',
        method:'POST',
        controller: [passport.authenticate('jwt', { session: false }),event.createEvent]
    }
    // {
    //     path:'/events',
    //     method:'PUT',
    //     // controller:userControllers.updateUser
    // }
    
]