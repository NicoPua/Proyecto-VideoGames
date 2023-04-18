import axios from "axios";

export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GENRES = "GET_GENRES";

export const ORDER_GAMES = "ORDER_GAMES";
export const FILTER_GENDER_GAMES = "FILTER_GENDER_GAMES";
export const FILTER_GAMES_DB_API = "FILTER_GAMES_DB_API";

export const CLEAN_DETAIL = "CLEAN_DETAIL";
//export const CLEAN_DATAGAMES = "CLEAN_DATAGAMES";


export const getAllGames = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/videogames`)).data;
        return dispatch({ type: GET_ALLGAMES, payload: response });
      };
} 

export const getGenres = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/genres`)).data
        return dispatch({type: GET_GENRES, payload: response})
    }
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

export const filterGenres = (gender) => { return { type: FILTER_GENDER_GAMES, payload: gender } }

export const filterGamesDBorAPI = (datatype) =>{ return { type: FILTER_GAMES_DB_API , payload: datatype}}

export const orderGames = (order) => { return { type: ORDER_GAMES, payload: order } }

export const cleanGameDetail = () => { return { type: CLEAN_DETAIL } };

//export const cleanDataGames = () => { return {type: CLEAN_DATAGAMES }}