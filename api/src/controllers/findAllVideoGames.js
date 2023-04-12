const axios = require("axios");
const {Videogame} = require("../db.js");
const cleanDataGame = require("./cleanDataGame.js");

const {API_KEY} = process.env;

const findAllVideoGames = async () => {
    let allGamesAPI = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;
    const allGamesDB = await Videogame.findAll(); 
    
    allGamesAPI = await cleanDataGame(allGamesAPI);
   
    const allVideogames = [...allGamesAPI, ...allGamesDB]
    return allVideogames;
}

module.exports = findAllVideoGames;