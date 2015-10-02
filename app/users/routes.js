var User  = require('./model/user');

module.exports = function(app) {
    app.post('/resources/users', function(req, res) {
	User.create({
	    email: req.body.email,
	    password: req.body.password,
	    done : false
	}, function(err, user) {
	    if (err)
		res.send(err);
	    User.findOne({email : req.body.email}, 'email', function(err, newUser) {
		if (err)
		    res.send(err)
		res.json(newUser)
	    });
	});
    });
}
