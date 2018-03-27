/*
 Expected output:

 Matthew Howard
 Exercise 6.3
 27 March 2018

 */
 //start program 

 var express = require("express");
 var http = require("http");
 var logger = require("morgan");
 var mongoose = require("mongoose");

 //mLab connection
 var mongoDB = "<mongo ds117469.mlab.com:17469/ems -u <dbuser> -p <dbpassword>";
 mongoose.connect(mongoDB, {
     useMongoClient: true  
 });
 mongoose.Promise = global.Promsie;
 var db = mongoose.connection;
 db.on("error", console.error.bind(console, "MongoDB connected error: "));
 db.once("open", function() {
     console.log("Application connected to mLab MongoDB instance.");
 });
