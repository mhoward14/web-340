/*
Matthew Howard
EMS (Milestone 1): User Interface Development
22 March 2018
Updated: 7 April 2018
Updated: 10 April 2018
*/
//start program
var http = require("http");
var path = require("path");
var csrf = require("csurf");
var logger = require("morgan");
var helmet = require("helmet");
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Employee = require("./models/employee");
var cookieParser = require("cookie-parser");

var app = express();

var csrfProtection = csrf({cookie: true});

var mongoDB = "mongodb://mhoward007:R3dsRUnit3d@ds117469.mlab.com:17469/ems";
mongoose.connect(mongoDB, {
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
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page",
        message: "XSS Prevention Example"
    });
});

app.post("/process", function (request, response){
    console.log(request.body.txtName);
    response.redirect("/");
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});