const {Videogame,Genre} = require("../db.js");

const gamesPageFilter = require("../auxFunctions/gamesPagesFilter.js");

const findAllVideoGames = async () => {
    let allGamesAPI = await gamesPageFilter();
    const allGamesDB = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    }); 
   
    const allVideogames = [...allGamesAPI, ...allGamesDB]
    return allVideogames;
}

module.exports = findAllVideoGames;