var mongoose = require('mongoose');                     // mongoose for mongodb
mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

module.exports = mongoose.model('NotificationPlan', {
    email : String
});
