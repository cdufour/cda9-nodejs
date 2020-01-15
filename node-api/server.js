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

app.get('/', (req, res) => {
    res.json({ message: 'homepage' })
})

app.get('/players', (req, res) => {
    res.json({ message: 'homepage' })
})

app.listen(5000, () => {
    console.log('Server running on 5000...')
})