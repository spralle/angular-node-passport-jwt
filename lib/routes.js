module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});
	app.get('/login', function(req, res) {
		res.render('login.ejs', {message:''});
	});
	app.get('/signup', function(req, res) {
		res.render('signup.ejs', {message:''});
	});
	app.get('/profile', isAuthenticated, function(req, res) {
		res.render('profile.ejs');
	});
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
}

function isAuthenticated(req, res, next) {
	if(req.isAuthenticated) {
		return next();
	} else {
		res.redirect('/');
	}
}