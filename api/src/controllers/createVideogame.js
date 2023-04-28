const { Videogame,Genre } = require("../db.js");
const saveGenresOnBDD = require("./guardarGenresOnBDD.js");
const findGenres = require("./findGenres.js");
const { Op } = require("sequelize");

const createVideogame = async ({id,name,description,genres,platforms,image,released,rating}) =>{    
    const existVideogame = await Videogame.findAll({    //Verifico si el juego ya existe en la base de datos.
        where: {
            name: {
                [Op.iLike]: `%${name}%`,    //Condiciono que el name del nuevo juego sea igual a alguno de la DB o lo contenga. 
            }
        }
    })

    //Si ya hay un juego con ese nombre en la DB, error.
    if(existVideogame.length) throw new Error("There is already a game with that name.");   
    //Creo un nuego juego en la DB.
    const newVideogame = await Videogame.create({id,name,description,platforms,image,released,rating}); 
   
    if(await Genre.count() === 0){                  //Consulto si hay o no hay registros en la base de datos;
        const response = await findGenres();        //Si no hay registros, busco los géneros en la API.
        await saveGenresOnBDD(response);            //Y las guardo en la base de datos para utilizarlas a continuación.
    }
    
    const foundedGenres = await Promise.all(        //Espero a que todas la promesas se completen.
        genres.map( async (genre) => {
            const searchedGenre = await Genre.findOne({ where: { name: genre }})    //Busco los géneros que coincidan con los de DB.
            if(!searchedGenre) throw new Error (`The genre: ${genre} doesn't exist in the Database`); //Si no encuentra ningún género, error.
            return searchedGenre;                       //Retorno el género o los géneros válidos. 
        })
    )
    await newVideogame.addGenres(foundedGenres);        //Agrego los géneros mediante un método creado por sequelize a newVideogame 
    return newVideogame;
}

module.exports = createVideogame;