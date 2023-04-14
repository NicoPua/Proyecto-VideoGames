const {Videogame} = require("../db.js");
const createVideogame = async ({id,name,description,platforms,image,released,rating}) =>{
    const newVideogame = Videogame.create({id,name,description,platforms,image,released,rating});
    //Videogame.setGenre()
    return newVideogame;
}

module.exports = createVideogame;