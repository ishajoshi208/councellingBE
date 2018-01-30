const express = require('express');
const app = express();
const middleware = require('../../app/middlewares');
const routes = require('../../app/routes');
const passport = require("passport");

var self = module.exports = {
    configApp(port) {
        app.listen(port, function (err, data) {
            if (err) {
                console.log("Error!! occured while configuring app");
            }
            else {
                console.log("Server started on port ", port);
            }
        })
        return self;
    },
    configMiddleware() {
        middleware.configMiddleware1(app);
        middleware.congifMiddleware2(app);
    },
    configRoutes(url) {
        routes.forEach(route => {
            var s = route.path;
            //    console.log(">>>>>>>>>",s);
            if (route.method == 'GET') {
                app.get(s, route.controller);

            }
            else if (route.method == 'POST') {
                app.post(s, route.controller);

            }
            else if (route.method == 'PUT') {
                app.put(s, route.controller);

            }
            else if (route.method == 'DELETE') {
                app.delete(s, route.controller);

            }
        })
        return self;
    }
    
}
