var jwt  = require('jsonwebtoken');
var User = require('../users/model/user');

module.exports = function(app) {
    app.post('/resources/authentication', function(req, res) {
	User.findOne({
	    email: req.body.email,
	    password: req.body.password
	}, function(err, user) {
	    if (err) {
		res.send(err);
	    }
	    if (!user) {
		 res.json({ success: false, message: 'Authentication failed. No such user or wrong password.' });
	    } else {
		var token = jwt.sign(user, app.get('superSecret'), {
		    expiresInMinutes: 1440 // expires in 24 hours
		});
		
		// return the information including token as JSON
		res.json({
		    success: true,
		    message: 'Enjoy your token!',
		    token: token
		});
	    }
	});
    });
}
