const express = require('express');
const bodyParser = require('body-parser');
const teams = require('./teams');
const dico = require('./dico');

const app = express();

// middleware pour gestion des ressources statiques
app.use(express.static('static'));

// middleware pour le parsing du json contenu dans req.body 
// (requêtes en POST)
app.use(bodyParser.json());

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

app.get('/ajax', (req, res) => {
    //res.json({ message: 'hello' });
    var randomIndex = Math.floor(Math.random() * teams.length);
    res.json(teams[randomIndex]);
})

app.post('/translate', (req, res) => {
    var result = dico.getTranslation(req.body.word, req.body.lang);
    res.json({ result });
})

app.listen(5000, () => {
    console.log('Server running on port 5000...');
})