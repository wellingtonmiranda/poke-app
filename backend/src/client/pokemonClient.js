const superagent = require('superagent');

const BASE_API = `https://pokeapi.co/api/v2/type/`;

module.exports = {
    async pokemonByType(type) {
        const pokemonResponse = await superagent.get(`${BASE_API}${type}/`);

        return pokemonResponse.body['pokemon'];
    },
};
