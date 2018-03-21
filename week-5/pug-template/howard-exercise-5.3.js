/*
 Expected output:

 Matthew Howard
 Exercise 5.3
 20 March 2018

 */
 //start program 

 var express = require("express");
 var http = require("http");
 var pug = require("pug");
 var path = require("path");
 var app = express();
 
 app.set("views", path.resolve(__dirname, "views"));

 app.set("view engine", "pug");

 app.get("/", function(req, res){

    res.render("index",{

        message: "Welcome to my Pug-based homepage!"

    });
 });

http.createServer(app).listen(3000, function(){
    
    console.log("Applicaton started and listening on port 3000.");

});

// end program