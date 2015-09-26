// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// define model =================
var NotificationPlan = mongoose.model('NotificationPlan', {
    email : String
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");


// routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all notification plans
    app.get('/api/notification-plans', function(req, res) {

        // use mongoose to get all notification plans in the database
        NotificationPlan.find(function(err, notificationPlans) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(notificationPlans); // return all notification plans in JSON format
        });
    });

    // create notification plan and send back all of them after creation
    app.post('/api/notification-plans', function(req, res) {
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
    app.delete('/api/notification-plans/:notification_plan_id', function(req, res) {
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

