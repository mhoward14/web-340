/*
 Expected output:

 Matthew Howard
 Exercise 7.3
3 April 2018

 */
 //start program 

 function fruits(str){
     return str.split(',');

 }

 module.exports = fruits;

 var fruits = require("../fruits");
 var chai = require("chai");
 var assert = chai.assert;

 describe("fruits", function(){
     it("should return an array of fruits", function(){
         var f = fruits('Apple,Orange,Mango');
         assert(Array.isArray(f));
     });
 });