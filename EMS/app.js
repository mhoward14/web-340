/*
Matthew Howard
EMS (Milestone 1): User Interface Development
22 March 2018
*/
//start program

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});