import { GET_ALLGAMES, GET_GENRES, GET_GAME_DETAIL, GET_ALL_PLATFORMS, ORDER_GAMES, FILTER_GENDER_GAMES, FILTER_GAMES_DB_API, CLEAN_DETAIL} from "./actions";

const initialState = {
    allGames: [],
    filterGames: [],
    genresGames: [],
    allPlatforms: [],
    gameDetails: {}
}

const rootReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_ALLGAMES: return {
            ...state,
            allGames: action.payload,
            filterGames: action.payload
        }
        case GET_GAME_DETAIL: return {
            ...state,
            gameDetails: action.payload
        }
        case GET_GENRES: return {
            ...state,
            genresGames: action.payload
        }
        case GET_ALL_PLATFORMS: return {
            ...state,
            allPlatforms: action.payload
        }
        case CLEAN_DETAIL: return {
            ...state,
            gameDetails: {}
        };


        case FILTER_GENDER_GAMES: 
            const copyGames = state.allGames;

            const GamesFiltered = (action.payload === "Genres")? state.allGames : copyGames.filter((game)=>{
                return !game.createinDb
                ? game.genres.includes(action.payload)  //Para juegos API
                : game.Genres.map((genre)=> genre.name).includes(action.payload); //Para juegos DB
            })
        return {
            ...state,
            filterGames: GamesFiltered
        }

        case FILTER_GAMES_DB_API: 
            const GamesDBAPI = [...state.allGames];
            const GamesFilter = (action.payload === "Stored Games")? GamesDBAPI.filter((game) => game.createinDb === false)
            : (action.payload === "Created Games")? GamesDBAPI.filter((game) => game.createinDb === true)
            : GamesDBAPI
        return {
            ...state,
            filterGames: GamesFilter
        }

        case ORDER_GAMES: 
            const Games = [...state.allGames];
            const Sort = (action.payload === 'Ascendente'? Games.sort((g1,g2) => {    
                    if (g1.name < g2.name) return 1;
                    if (g1.name > g2.name) return -1;  
                    return 0;
                }) : (action.payload === 'Descendente')? Games.sort((g1,g2) => {         
                    if (g1.name < g2.name)  return -1;
                    if (g1.name > g2.name) return 1;
                    return 0;
                }) : (action.payload === 'Rating')? Games.sort((g1,g2) => {    
                    if (g1.rating < g2.rating) return 1;
                    if (g1.rating > g2.rating) return -1;  
                    return 0;
                }) : Games)
        return{
            ...state,
            filterGames: Sort
        }

        default: return {...state}
    }
}

export default rootReducer;