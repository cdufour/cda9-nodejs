const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aston',
    database: 'aston'
});

// connection à la base sql
conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database')
    }
}); 

const app = express();

app.use(bodyParser.json());

// middleware personnalisé
app.use((req, res, next) => {
    console.log(req.headers);
    var token = req.headers['x-token'];

    // simulation d'une vérification de token
    // présent dans les headers de la requête
    if (token == 'azerty123') {
        next(); // on passe au middlew suivant le cas échéant
    } else {
        res.json({ access: 'refused' });
    }

})

app.get('/', (req, res) => {
    res.json({ message: 'homepage' })
})

// liste des joueurs
app.get('/players', (req, res) => {
    var q = 'SELECT * FROM players';
    conn.query(q, (err, result) => {
        res.json({ players: result });
    })
})

// joueur en particulier
app.get('/players/:id', (req, res) => {
    var q = 'SELECT * FROM players WHERE id = ?';
    conn.query(q, [req.params.id], (err, result) => {
        res.json({ player: result[0] })
    })
})

// ajout d'un joueur
app.post('/players', (req, res) => {
    var { firstname, lastname } = req.body.player;
    var q = 'INSERT INTO players (firstname, lastname) VALUES (?, ?)';
    conn.query(q, [firstname, lastname], (err, result) => {
        
        // on renvoie au client l'id du dernier joueur inséré
        res.json({ playerId: result.insertId });
    })
})

// mise à jour (patch) d'un joueur
app.patch('/players/:id', (req, res) => {
    var { firstname, lastname } = req.body.player;
    var q = 'UPDATE players SET firstname = ?, lastname = ? WHERE id = ?';
    conn.query(q, [firstname, lastname, req.params.id], (err, result) => {
        res.json({ playerUpdated: true });
    }) 
})

// suppression d'un joueur
app.delete('/players/:id', (req, res) => {
    var q = 'DELETE FROM players WHERE id = ?';
    conn.query(q, [req.params.id], (err, result) => {
        res.json({ playerDeleted: true });
    })
})


app.listen(5000, () => {
    console.log('Server running on 5000...')
})