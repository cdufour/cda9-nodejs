const http = require('http');
const fs = require('fs');

const resBody = "Le serveur a répondu à la requête";

http
.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Homepage');
        res.end();
    } else if (req.url.indexOf('login') != -1) {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('login string found in url');
        res.end();
    } else if (req.url == '/horaires') {
        res.writeHead(200, {
            'Content-Type':'text/html',
            'X-Header-Test':'Info perso'
        });
        fs.readFile('./static/horaires.html', (err, data) => {
            if (err) console.log(err);
            res.end(data);
        });
    } else if (req.url == '/styles.css') {
        res.writeHead(200, {'Content-Type':'text/css'});
        fs.readFile('./static/styles.css', (err, data) => {
            if (err) console.log(err);
            res.end(data);
        });
    } else {
        res.end();
    }

    //res.end();
})
.listen(5000);