var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 4.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 4.3
 13 March 2018

 */
 //start program 

var express = require("express");
var http = require("http");
var app = express();
    
app.get("/not-found", function(req, res){ 
    res.status(404);
    
    res.json({
        
        error: "Ah man! Don't you hate it when this happens!?"

    });
});

app.get("/ok", function(req, res){
    res.status(200);

    res.json({

        message: "Oh snap! That page loaded so fast!!."

    });

});

app.get("/not-implemented", function(req, res){
    res.status(501);

    res.json({

        error: "This page is no longer in use."

    });

});

http.createServer(app).listen(3000, function(){
   
    console.log("Application started on port 3000");

});

// end program