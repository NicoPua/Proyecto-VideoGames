const {Videogame} = require("../db.js");

const getVideogameByID = async (id) =>{
    const videogame = await Videogame.findByPk(id)
    return videogame;
}

module.exports = getVideogameByID;