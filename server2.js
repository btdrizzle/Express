require('dotenv').config();
const fs = require('fs');
const http = require('http');
const PORT = process.env.PORT || 8080;
const PORT2 = process.env.PORT2

function handleRequest(request,response) {
    response.end(`It works!! Path hit: ${request.url}`);
};
const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest);

server.listen(PORT,function ()  {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(__dirname);
});
server2.listen(PORT2,function ()  {
    console.log(`Server listening on http://localhost:${PORT2}`);
    console.log(__dirname);
});