const { Videogame,Genre } = require("../db.js");
const saveGenresOnBDD = require("./guardarGenresOnBDD.js");
const findGenres = require("./findGenres.js");
const { Op } = require("sequelize");

const createVideogame = async ({id,name,description,genres,platforms,image,released,rating}) =>{
    const existVideogame = await Videogame.findAll({    //Verifico si el juego ya existe en la base de datos o no.
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            }
        }
    })
    if(existVideogame.length) return "There is already a game with that name.";

    const newVideogame = await Videogame.create({id,name,description,platforms,image,released,rating});
   
    if(await Genre.count() === 0){                  //Consulto si hay o no hay registros en la base de datos;
        const response = await findGenres();
        await saveGenresOnBDD(response);  
    }
    
    const foundedGenres = await Promise.all(
        genres.map( async (genre) => {
            const searchedGenre = await Genre.findOne({ where: { name: genre }})
            if(!searchedGenre) throw new Error (`The genre: ${genre} doesn't exist in the Database`);
            return searchedGenre;
        })
    )
    await newVideogame.addGenre(foundedGenres);
    return newVideogame;
}

module.exports = createVideogame;