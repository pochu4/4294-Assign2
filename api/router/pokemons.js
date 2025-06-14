const express = require('express');
const pokemonsRouter = express.Router();
const connection = require('../db');
const upload = require('../storage');


// couldnt figure out how to do authenticated views :/ 
// ~1:40:00

// const authenticateToken = require('../auth.jwt');

// // Create new router
// pokemonsRouter.use(authenticateToken)

// All Pokemons
pokemonsRouter.get('/', (req, res) => {

    console.log(req.user);

    const types = req.query.types;

    // :(
    // const userId = req.user.userId;

    let sql = `
    SELECT pokemons.*, types.name as type_name
    FROM pokemons
    JOIN types ON pokemons.type_id = types.id
    `;

    const queryParams = [];

    if (types) {

        sql += ` WHERE types.id IN (?)`

        if (Array.isArray(types)) {
            queryParams.push(...types);
        } else {
            queryParams.push(types)
        }
    } 
    
    
    // else {

    //     sql += ` WHERE `;

    // }

    // sql += ` pokemons.user_id = ?`;
    // queryParams.push(user_id);

    connection.query(sql, [queryParams], (err, results) => {
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

// Delete Pokemon

pokemonsRouter.delete("/:id", (req, res) => {

    const id = req.params.id;
    const sql = `DELETE FROM pokemons WHERE id = ? LIMIT 1`

    connection.query(sql, [id], (err, results) => {

        if(err) {
            console.log(err); 
            res.status(500).send("Interal Server Error");
          }
      
          res.json({message: "Pokemon Deleted"});

    })

})




// Update Pokemon
pokemonsRouter.put("/:id", upload.single("image"), (req, res) => {

    const { id } = req.params;

    const { type_id, name, description } = req.body;

    let updatePokemonSQL = `
    UPDATE pokemons SET type_id = ?, name = ?, description = ? `;

    const queryParams = [type_id, name, description];

    if (req.file) {
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

    // Get type id and title from req body
    const { type_id, name, description } = req.body;

    const user_id = req.user.userId;

    const image_name = req.file.filename;

    // console.log("name: ", name);
    // console.log("type_id: ", type_id);
    // console.log("image: ", image_name);
    // console.log("description: ", description);

    const addPokemonSQL = `
    INSERT INTO pokemons (name, type_id, image_name, description, user_id) VALUES (?, ?, ?, ?, ?)`;

    connection.query(addPokemonSQL, [name, type_id, image_name, description, user_id], (err, results) => {

        if (err) {
            console.log(err);
            return res.status(500).send("An Error Occured");
        }

        res.status(200).json({ message: "Pokemon Added!" });

    });

});

module.exports = pokemonsRouter;