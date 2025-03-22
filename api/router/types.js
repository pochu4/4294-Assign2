const express = require('express');
const typesRouter = express.Router();
const connection = require('../db');

typesRouter.get('/', (req, res) => {

    const sql = "SELECT * FROM types";

    connection.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });

});

module.exports = typesRouter;