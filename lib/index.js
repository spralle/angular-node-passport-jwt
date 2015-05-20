var express = require('express');
var passport = require('passport');
var morgan = require('morgan');
var app = module.exports = express();

require('./passport')(passport);
require('./routes')(app, passport);


app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 3000);

console.log('Started!');