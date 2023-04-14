const axios = require("axios");
const {API_KEY} = process.env;
const cleanDataGame = require("../controllers/cleanDataGame.js");


const gamesPageFilter = async () => {
    let gamesFiltered = [];
    let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    for (let i = 1; i < 6; i++) {
        let gamesAPI = (await axios.get(URL)).data;
        URL = (gamesAPI.next);
        let cleanData = await cleanDataGame(gamesAPI.results);
        gamesFiltered.push(cleanData);
    }
    const videogames = gamesFiltered.flat();  // [[gamessP1],[gamesP2],[gamesP3]...] con flat() [gamesP1, gamesP2...]
    return videogames; 
}

module.exports = gamesPageFilter;