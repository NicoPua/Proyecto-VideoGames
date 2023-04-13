const axios = require("axios");
const {Videogame} = require("../db.js");
const { API_KEY } = process.env;

const findVideogameByID = async (idValue,idType) =>{
    if(idType == 'DB'){
        const arrGameDB = await Videogame.findByPk(idValue)
        return arrGameDB;
    }else if(idType == 'API'){
        let arrGameAPI = (await axios.get(`https://api.rawg.io/api/games/${idValue}?key=${API_KEY}`)).data;
        //arrGameAPI = cleanDataGameByID(arrGameAPI);
        const {id,name,released,background_image,platforms,rating,genres,description} = arrGameAPI;
        return {id,name,released,background_image,platforms,rating,genres,description,createinDb: false}; 
    }
}

module.exports = findVideogameByID;