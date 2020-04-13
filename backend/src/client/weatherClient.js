const superagent = require('superagent');

const KEY = '4f9cbf298032e22d844e78e4eae65185';

module.exports = {
    async weatherByCity(city) {
        const weatherResponse = await superagent.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
        );

        return weatherResponse.body;
    },
};
