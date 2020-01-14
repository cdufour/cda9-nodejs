const http = require('http');
const fs = require('fs');

const resBody = "Le serveur a répondu à la requête";

http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Homepage');
        res.end();
    } else if (req.url.indexOf('login') != -1) {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('login string found in url');
        res.end();
    } else if (req.url == '/horaires') {
        // ajout d'un header personnalisé (X- pour eXtended) dans la réponse
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
    } else if (req.url.startsWith('/img/')) {
        // routes/urls concernant les images
        let segments = req.url.split('/img/');
        let fileName = segments[1]; // récupère le nom du fichier
        
        res.writeHead(200, {'Content-Type':'image/png'});

        // lecture du fichier
        fs.readFile('./static/images/' + fileName, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        });

    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('Resource not found');
    }

    //res.end(); Attention !!! Asynchronie
}).listen(5000);