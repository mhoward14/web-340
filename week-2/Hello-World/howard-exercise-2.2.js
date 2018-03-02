var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 2.2");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 2.2
 1 March 2018

 */
 //start program 
 
 var express = require('express');
 var http = require('http');


 var app = express();


 app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})


http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});

//end program