import { http } from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I love VS Code');
}).listen(1337, '127.0.0.1');
