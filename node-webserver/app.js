const express = require('express');

const app = express();

// middleware pour gestion des ressources statiques
app.use(express.static('static'));

const title = "Horaires piscine";

// table de routage
app.get('/', (req, res) => {
    res.send('<i>Homepage</i>');
})

app.get('/horaires', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            <h1>${title}</h1>
        </body>
    </html>
    `;
    res.send(html);
})

app.get('/logo/juve', (req, res) => {
    // __dirname renvoie le chemin absolu du répertoire
    // serveur (là où est situé le fichier app.js)
    res.sendFile(
        __dirname + '/static/images/juve-logo.jpg');
})

app.listen(5000, () => {
    console.log('Server running on port 5000...');
})