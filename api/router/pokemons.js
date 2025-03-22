const express = require('express');
const pokemonsRouter = express.Router();
const connection = require('../db');
const upload = require('../storage');

// All Pokemons
pokemonsRouter.get('/', (req, res) => {

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


// Single ID
pokemonsRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT pokemons.*, types.name as type_name
        FROM pokemons
        JOIN types ON pokemons.type_id = types.id
        WHERE pokemons.id = ?
        `;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results[0]);
    });
});




// Update Pokemon
pokemonsRouter.put("/:id", upload.single("image"), (req, res) => {

    const { id } = req.params;
    
    const { type_id, name, description } = req.body;

    let updatePokemonSQL = `
    UPDATE pokemons SET type_id = ?, name = ?, description = ? `;

    const queryParams = [type_id, name, description];

    if(req.file) {
        updatePokemonSQL += `, image_name = ?`;
        queryParams.push(req.file.filename);
    }

    updatePokemonSQL += ` WHERE id = ? LIMIT 1`;
    queryParams.push(id);

    connection.query(updatePokemonSQL, queryParams, (err, results) => {
            
            if (err) {
                console.log(err);
                return res.status(500).send("An Error Occured");
            }
    
            res.status(200).json({ message: "Pokemon Updated!" });
    
        });
});






// Add Pokemon
pokemonsRouter.post("/", upload.single("image"), (req, res) => {

    const { type_id, name, description } = req.body;
    const image_name = req.file.filename;

    // console.log("name: ", name);
    // console.log("type_id: ", type_id);
    // console.log("image: ", image_name);
    // console.log("description: ", description);

    const addPokemonSQL = `
    INSERT INTO pokemons (name, type_id, image_name, description) VALUES (?, ?, ?, ?)`;

    connection.query(addPokemonSQL, [name, type_id, image_name, description], (err, results) => {

        if (err) {
            console.log(err);
            return res.status(500).send("An Error Occured");
        }

        res.status(200).json({ message: "Pokemon Added!" });

    });

});

module.exports = pokemonsRouter;