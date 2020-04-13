const express = require('express');
const pokemonController = require('./controllers/pokemonController');
const cors = require('cors')

const app = express();
app.use(cors())

const port = 3333;

app.get('/pokemon', pokemonController.index);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
