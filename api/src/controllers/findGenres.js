const axios = require("axios");

const { API_KEY } = process.env;

const findGenres = async () =>{
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    return response.data.results;
}

module.exports = findGenres;