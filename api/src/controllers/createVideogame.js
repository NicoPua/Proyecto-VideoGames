const {Videogame} = require("../db.js");
const createVideogame = (data) =>{
    const {id,name,description,platforms,image,released,rating} = data;
    const newVideogame = Videogame.create({id,name,description,platforms,image,released,rating});
    return newVideogame;
}

module.exports = createVideogame;