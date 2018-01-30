const app1 = require('./express');
const env = require('./environments');
// const secretkey = require('./passportSecret');

module.exports={
    config(){
       app1.configApp(env.PORT) ;
       app1.configMiddleware();
       app1.configRoutes(env.URL);
    }
}

