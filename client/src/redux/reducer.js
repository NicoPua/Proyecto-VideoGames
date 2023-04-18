import { GET_ALLGAMES, GET_GAME_DETAIL, ORDER_GAMES, FILTER_GENDER_GAMES, FILTER_GAMES_DB_API, CLEAN_DETAIL, CLEAN_DATAGAMES} from "./actions";

const initialState = {
    allGames: [],
    filterGames: [],
    searchedGames: [],
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

        case CLEAN_DETAIL: return {...state, gameDetails: {}};
        case CLEAN_DATAGAMES: return {...state, allGames: [], filterGames: []};

        case FILTER_GAMES_DB_API: return {
            ...state,
            filterGames: (action.payload !== "Filters")?
                state.allCharacters.filter((char)=> char.gender === action.payload) : state.allCharacters
        }

        case ORDER_GAMES: 
        const Games = state.filterGames; 
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