const axios = require("axios");
const {Videogame} = require("../db.js");
const cleanDataGame = require("./cleanDataGame.js");

const {API_KEY} = process.env;

const findGameByName = async (name) =>{
    let gameByNameAPI = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data.results;
    gameByNameAPI = await cleanDataGame(gameByNameAPI);       //Filtro los datos que necesito

    let gameByNameBD = await Videogame.findAll({ where: { name } });

    if(!gameByNameAPI.length && !gameByNameBD.length) throw new Error("This game doesn't exists")

    const gameByName = [...gameByNameAPI, ...gameByNameBD];
    return gameByName;
}

module.exports = findGameByName;