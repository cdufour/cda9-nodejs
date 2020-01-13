const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Fine della prima giornata');
    res.end();
}).listen(5000);