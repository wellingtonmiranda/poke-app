const weatherClient = require('../client/weatherClient');

module.exports = {
    async getWeather(city) {
        const body = await weatherClient.weatherByCity(city);
        return {
            city: body.name,
            weather: body.weather[0].main,
            temperature: body.main.temp,
        };
    },
};
