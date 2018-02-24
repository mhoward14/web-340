var header = require('../header.js');
var headerMsg = header.display("Matthew", "Howard", "Exercise 1.5");
console.log(headerMsg);

/*
 Expected output:

 Matthew Howard
 Exercise 1.5
 23 February 2018

 */
 //start program

 var http = require("http");

 function processRequest(req, res) {
 
 var body = "Welcome!";
 
     var contentLength = body.length;
 
     res.writeHead(200, {
 
         'Content-Length': contentLength,
 
         'Content-Type': 'text/plain'
 
     });
 
     res.end(body);
 
 }
 
 var s = http.createServer(processRequest);
 
 s.listen(8080);




 //end program