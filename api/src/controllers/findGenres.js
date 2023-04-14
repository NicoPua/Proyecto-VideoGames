const axios = require("axios");
const { API_KEY } = process.env;

const findGenres = async () =>{
    const response = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    return response;
}

module.exports = findGenres;