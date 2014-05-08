// modules =================================================
var express = require('express');
var app     = express();
//var mongoose = require('mongoose'); // mongoose for mongodb
var request = require('request');
//var database = require('./config/database'); // load the database config

// configuration ===========================================
//mongoose.connect(database.url); // connect to mongoDB database

var port = process.env.PORT || 8080; // set our port
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app, request); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens (AKA static files are served) on port ' + port); // shoutout to the user
exports = module.exports = app; // expose app
