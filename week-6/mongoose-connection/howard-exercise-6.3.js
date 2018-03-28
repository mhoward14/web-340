/*
 Expected output:

 Matthew Howard
 Exercise 6.3
 27 March 2018

 */
 //start program 

var mongoose = require("mongoose");
var mongoDB = "mongodb://mhoward007:R3dsRUnit3d@ds117469.mlab.com:17469/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});