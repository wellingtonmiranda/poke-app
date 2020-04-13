const pokemonClient = require('../client/pokemonClient');

module.exports = {
    async getPokemons(type) {
        return await pokemonClient.pokemonByType(type);
    },
};
