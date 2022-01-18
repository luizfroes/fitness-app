const axios = require("axios").default;

const getCurrentWeather = async(cityName) => {
    const currentDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    const { data } = await axios.get(currentDataUrl);
    return data;
};

module.exports = { getCurrentWeather };