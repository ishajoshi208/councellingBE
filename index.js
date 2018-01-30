const appConfig = require('./config');
const mongoose = require('./config/mongoose');
// const environment = require('./config/environments');
appConfig.config();
mongoose.configureDb();