const axios = require("axios");
const {Videogame} = require("../db.js");
const cleanDataGame = require("./cleanDataGame.js");

const {API_KEY} = process.env;

const findGameByName = async (name) =>{
    const cleanGameAPI = [];
    let gameByNameAPI = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data.results;
    
    gameByNameAPI = await cleanDataGame(gameByNameAPI);                     //Limpio y filtro los datos que necesito.
    for (let i = 0; i < 15; i++) { cleanGameAPI[i] = gameByNameAPI[i] }     //Filtro los primeros 15 juegos en un nuevo array.

    let gameByNameBD = await Videogame.findAll({ where: { name } });        //Busco el name del juego en la DB

    if(!cleanGameAPI.length && !gameByNameBD.length) throw new Error("This game doesn't exists")//Si no encuentra el juego, error.

    const gameByName = [...cleanGameAPI, ...gameByNameBD];  //Junto elementos de ambos arrays para luego enviarlo.
    return gameByName;
}

module.exports = findGameByName;