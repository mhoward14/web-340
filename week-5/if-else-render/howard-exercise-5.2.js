/*
 Expected output:

 Matthew Howard
 Exercise 5.2
 20 March 2018

 */
 //start program 

 var express = require("express");
 var http = require("http");
 var path = require("path");
 var app = express();
 
 app.set("views", path.resolve(__dirname, "views"));

 app.set("view engine", "ejs");

 var n = [
     "Bobby Charlton",
     "George Best",
     "Ryan Giggs",
     "Eric Cantona"
 ];

 app.get("/", function(req, res){

    res.render("index",{

        names: n

    })
 });

http.createServer(app).listen(8080, function(){
    
    console.log("Applicaton started and listening on port 8080.");

});

// end program