const WeatherService = require('../service/weatherService');
const PokemonService = require('../service/pokemonService');

module.exports = {
    async index(req, res) {
        const { city } = req.query;
        let weather, temperature;
        try {
            const completeWeather = await WeatherService.getWeather(city);
            weather = completeWeather.weather;
            temperature = completeWeather.temperature;
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ error: 'Impossível buscar clima dessa cidade!' });
        }

        let pokemonType;
        if (weather === 'Rain') {
            pokemonType = 'electric';
        } else if (temperature < 5) {
            pokemonType = 'ice';
        } else if (temperature >= 5 && temperature < 10) {
            pokemonType = 'water';
        } else if (temperature >= 12 && temperature < 15) {
            pokemonType = 'grass';
        } else if (temperature >= 15 && temperature < 21) {
            pokemonType = 'ground';
        } else if (temperature >= 23 && temperature < 27) {
            pokemonType = 'bug';
        } else if (temperature >= 27 && temperature < 33) {
            pokemonType = 'rock';
        } else if (temperature > 33) {
            pokemonType = 'fire';
        } else {
            pokemonType = 'normal';
        }

        const allPokemonsTypes = await PokemonService.getPokemons(
            pokemonType
        );

        const randIndex = Math.floor(
            Math.random() * allPokemonsTypes.length
        );
        const randonPokemon = allPokemonsTypes[randIndex];

        return res.json({
            pokemon: randonPokemon,
            weather,
            temperature,
            city,
        });
    },
};
