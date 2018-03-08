var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 3.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 3.2
 7 March 2018

 */
 //start program

var express = require('express'); 
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'This is the Morgan Logger. Keeper of all!'
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on part %s', 3000);
});

//end program