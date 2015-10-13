var mongoose = require('mongoose');                     // mongoose for mongodb

module.exports = mongoose.model('NotificationPlan', {
    user_id : String
});
