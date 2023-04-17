import axios from "axios";

export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
//export const CREATE_GAME = "CREATE_GAME";

export const ORDER_GAMES = "ORDER_GAMES";
export const FILTER_GENDER_GAMES = "FILTER_GENDER_GAMES";
export const FILTER_GAMES_DB_API = "FILTER_GAMES_DB_API";

export const CLEAN_DETAIL = "CLEAN_DETAIL";


export const getAllGames = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/videogames`)).data;
        dispatch({ type: GET_ALLGAMES, payload: response });
      };
} 

export const getGameDetail = (id) =>{
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
        dispatch({ type: GET_GAME_DETAIL, payload: response });
    };
}

export const createGames = (videogame) =>{
    return function() {
        axios.post("http://localhost:3001/videogames", videogame)         //GUARDO la información de "character" en la URL/fav
        .then((res) => console.log("Videojuego Agregado"));
    }
 }

export const filterCards = (gender) => { return { type: FILTER_GENDER_GAMES, payload: gender } }

export const filterGamesDBorAPI = () =>{ return { type: FILTER_GAMES_DB_API }}

export const orderCards = (order) => { return { type: ORDER_GAMES, payload: order } }

export const cleanDetail = () => { return { type: CLEAN_DETAIL } };