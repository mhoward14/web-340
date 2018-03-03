var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(req, res) {

   res.render("index", {
       firstName: "Eric",
       lastName: "Cantona",
       address: "Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK"
    });

});

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});
