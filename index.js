var http = require('http');

const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

function handleRequest(request, response) {
  response.end(`Web server 3 changed back running on Node.js v${process.versions.node}.`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, IP, function() {
  console.log(`Server listening on http://${IP}:${PORT}`);
});