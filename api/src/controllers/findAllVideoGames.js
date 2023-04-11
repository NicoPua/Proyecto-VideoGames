const {Videogame} = require("../db.js")

const findAllVideoGames = async () => {
    const videogames = await Videogame.findAll(); 
    return videogames;
}

module.exports = findAllVideoGames;