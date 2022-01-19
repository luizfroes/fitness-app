const axios = require("axios").default;

const getCurrentWeather = async(cityName) => {
    const currentDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    const { data } = await axios.get(currentDataUrl);
    return data;
};

const getQuote = async() => {
    const options = {
        method: "POST",
        url: "https://motivational-quotes1.p.rapidapi.com/motivation",
        headers: {
            "content-type": "application/json",
            "x-rapidapi-host": process.env.RAPID_HOST_QUOTE,
            "x-rapidapi-key": process.env.RAPID_API_QUOTE,
        },
        data: { key1: "value", key2: "value" },
    };

    const { data } = await axios.request(options);

    return data;
};

module.exports = { getCurrentWeather, getQuote };