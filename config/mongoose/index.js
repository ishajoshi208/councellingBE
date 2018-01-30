const mongoose = require('mongoose');
const db = require('./db');
module.exports={
    configureDb(){
        db.connectDb(mongoose);
    }
}