var LocalStrategy = require('passport-local').Strategy;

var users = [
	{ id:1, username: 'admin', password: 'greger13', email:'admin@example.org'},
	{ id:2, username: 'jdoe', password: 'greger13', email:'jdoe@example.org'}
]

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		done(null, users[id-1]);
	});

	passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback		
	}, function(req, email, password, done) {

	}));
}