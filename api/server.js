const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

// Import the pokemons & types router
const pokemonsRouter = require('./router/pokemons');
const typesRouter = require('./router/types');
const usersRouter = require('./router/users');

// Takes requests from any location
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

// Sets path for pokemon and types router
app.use('/pokemons', pokemonsRouter);
app.use('/types', typesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});