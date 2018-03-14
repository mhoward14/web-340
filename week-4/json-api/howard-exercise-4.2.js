var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 4.2
 13 March 2018

 */
 //start program 

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function(req, res){

    var id = parseInt(req.params.id, 10);

    res.json({

        firstName: 'Matthew',
        lastName: 'Howard',
        employeeId: id

    });

});

http.createServer(app).listen(3000, function(){
    console.log("Application started and listening port 3000");
});

// end program