const axios = require("axios");
const {Videogame,Genre} = require("../db.js");
const cleanDataGameAPI = require("../auxFunctions/cleanDataGameAPI.js");
const { API_KEY } = process.env;

const findVideogameByID = async (idValue,idType) =>{
    if(idType == 'DB'){
        const arrGameDB = await Videogame.findByPk(idValue,{
            include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
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