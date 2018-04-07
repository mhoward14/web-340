/*
Matthew Howard
EMS (Milestone 1): User Interface Development
22 March 2018
Updated: 7 April 2018
*/
//start program
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var Employee = require("./models/employee");
var app = express();

var mongoDB = "mongodb://mhoward007:R3dsRUnit3d@ds117469.mlab.com:17469/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

var Employee = new Employee({
    firstName: "Matthew",
    lastName: "Howard"
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page",
        message: "Welcome To My: EMS User Interface Development Landing Page"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});