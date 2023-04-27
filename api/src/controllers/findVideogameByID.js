const axios = require("axios");
const {Videogame,Genre} = require("../db.js");
const cleanDataGameAPI = require("../auxFunctions/cleanDataGameAPI.js");
const { API_KEY } = process.env;

const findVideogameByID = async (idValue,idType) =>{
    if(idType == 'DB'){
        const arrGameDB = await Videogame.findByPk(idValue,{        //Busco en la DB por PrimaryKey.
            include: {                        //Especifico que quiero incluir una tabla relacionada.
            model: Genre,                     //Modelo que quiero incluir, en este caso, Genre.
            attributes: ["name"],             //Incluyo el atributo "name" de Genre
            through: {
                attributes: []                //No incluyo los atributos de la tabla intermedia en la propiedad "Genres"
            }
        }})
        return arrGameDB;
    }else if(idType == 'API'){
        let arrGameAPI = (await axios.get(`https://api.rawg.io/api/games/${idValue}?key=${API_KEY}`)).data;
        const cleanedData = cleanDataGameAPI(arrGameAPI);
        return cleanedData; 
    }
}

module.exports = findVideogameByID;