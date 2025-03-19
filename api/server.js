const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const port = 3000;

// Takes requests from any location
app.use(cors());

app.use(express.static('public'));

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'pokemon_db_user',
    password: 'secretPassword1',
    database: 'pokemon',

});

connection.connect((err) => {
    if (err) {
        console.error('An error occurred while connecting to the fake pokemon db');
        return;
    }
    console.log('Connected to the database');
});

app.get('/pokemons', (req, res) => {

    const sql = `
    SELECT pokemons.*, types.name as type_name
    FROM pokemons
    JOIN types ON pokemons.type_id = types.id
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.json(results);

    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});