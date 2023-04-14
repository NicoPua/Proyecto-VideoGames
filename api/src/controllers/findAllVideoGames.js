const {Videogame} = require("../db.js");

const gamesPageFilter = require("../auxFunctions/gamesPagesFilter.js");


const findAllVideoGames = async () => {
    let allGamesAPI = await gamesPageFilter();
    const allGamesDB = await Videogame.findAll(); 
   
    const allVideogames = [...allGamesAPI, ...allGamesDB]
    return allVideogames;
}

module.exports = findAllVideoGames;