// Dependencies
require('dotenv').config();
const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = process.env.PORT || 8080;

// Create our server
const server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    let page;
    console.log(req.url);
    
    // switch(req.url) {
    //   case "/":
    //     page = "/index"
    //     break;
    //   case "/foods":
    //     page = "/foods"
    //     break;
    //   case "/movies":
    //     page = "/movies"
    //     break;
    //   case "/css":
    //     page = "/css"
    //     break;
    // }
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + req.url, function(err, data) {
    if(err) console.log(err);
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});