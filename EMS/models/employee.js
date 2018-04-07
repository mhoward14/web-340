/*
Matthew Howard
EMS (Milestone 3): User Interface Development
7 April 2018
*/
//start program

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema ({
    firstName: String,
    lastName: String
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var logger = require("morgan");