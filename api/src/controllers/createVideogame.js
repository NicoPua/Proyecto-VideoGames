const {Videogame} = require("../db.js");
const createVideogame = async ({id,name,description,genre,platforms,image,released,rating}) =>{

    const newVideogame = Videogame.create({id,name,description,genre,platforms,image,released,rating});
    return newVideogame;
}

module.exports = createVideogame;