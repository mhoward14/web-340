var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.4");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 4.4
 13 March 2018

 */
 //start program 

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(req, res) {
    res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) {
    res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) {
    res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) {
    res.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

// end program