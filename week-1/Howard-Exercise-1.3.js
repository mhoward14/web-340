var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 1.3");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 1.3
 22 February 2018

 */
 //start program 

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=howard')

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

//end program
