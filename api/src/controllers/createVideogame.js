const {Videogame} = require("../db.js");

const createVideoGame = async (data) =>{
    const {id,name,description,platforms,image,released,rating} = data;
    const newVideogame = await Videogame.create({id,name,description,platforms,image,released,rating});
    return newVideogame;
}

module.exports = createVideoGame;