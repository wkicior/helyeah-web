var NotificationPlan = require('./model/notification-plan.js')
// routes ======================================================================

// api ---------------------------------------------------------------------
// get all notification plans
module.exports = function(app) {
    app.get('/resources/notification-plans', function(req, res) {

        // use mongoose to get all notification plans in the database
        NotificationPlan.find(function(err, notificationPlans) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(notificationPlans); // return all notification plans in JSON format
        });
    });

    // create notification plan and send back all of them after creation
    app.post('/resources/notification-plans', function(req, res) {
        NotificationPlan.create({
            email : req.body.email,
            done : false
        }, function(err, notificationPlan) {
            if (err)
                res.send(err);

            // get and return all the notification plans after you create another
            NotificationPlan.find(function(err, notificationPlans) {
                if (err)
                    res.send(err)
                res.json(notificationPlans);
            });
        });

    });

    // delete a notification plan
    app.delete('/resources/notification-plans/:notification_plan_id', function(req, res) {
        NotificationPlan.remove({
            _id : req.params.notification_plan_id
        }, function(err, notificationPlan) {
            if (err)
                res.send(err);

            // get and return all the notification plans after you create another
            NotificationPlan.find(function(err, notificationPlans) {
                if (err)
                    res.send(err)
                res.json(notificationPlans);
            });
        });
    });
}
