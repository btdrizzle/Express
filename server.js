require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 8080;

function handleRequest(request,response) {
    response.end(`It works!! Path hit: ${request.url}`);
};
const server = http.createServer(handleRequest);

server.listen(PORT,function ()  {
    console.log(`Server listening on http://localhost:${PORT}`);
});



