var http = require('http');
var port = 1337, hostname = '127.0.0.1';
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});