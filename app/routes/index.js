const user = require("./user");
const loginUser = require("./loginUser");
const events = require("./events");
const beliefs = require("./beliefs");
const consequences = require("./consequences");
const disputes = require("./disputes");
const emotions = require("./emotions");
const feelings = require("./feelings");

const routes=[
     ...user,
     ...loginUser,
     ...events,
     ...beliefs,
     ...consequences,
     ...disputes,
     ...emotions,
     ...feelings
]
module.exports=routes;
