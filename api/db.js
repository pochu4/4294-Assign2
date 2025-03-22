const mysql = require('mysql2');

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

module.exports = connection;