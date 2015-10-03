var jwt  = require('jsonwebtoken');
var NotificationPlan = require('./model/notification-plan.js')

module.exports = function(app) {
    // route middleware to verify a token
    app.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	
	// decode token
	if (token) {
	    
	    // verifies secret and checks exp
	    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		if (err) {
		    return res.json({ success: false, message: 'Failed to authenticate token.' });    
		} else {
		    // if everything is good, save to request for use in other routes
		    req.decoded = decoded;    
		    next();
		}
	    });
	    
	} else {
	    
	    // if there is no token
	    // return an error
	    return res.status(403).send({ 
		success: false, 
		message: 'No token provided.' 
	    });
	    
	}
    });

    // get all notification plans
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
