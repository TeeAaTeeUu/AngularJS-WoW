// modules =================================================
var express = require('express');
var app     = express();

// configuration ===========================================

var port = process.env.PORT || 8080; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens (AKA static files are served) on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app