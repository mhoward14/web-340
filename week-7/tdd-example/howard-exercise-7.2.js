
/*
 Expected output:

 Matthew Howard
 Exercise 7.2
 3 April 2018

 */
 //start program

var assert = require("assert");
describe("String#split", function(){
    it("should teturn an array of fruits", function(){
        assert(Array.isArray('Apple,Banana,Mango'.split(',')));
    });
});

function getFruits(str){
    return str.split(',');
}
module.exports = getFruits;


