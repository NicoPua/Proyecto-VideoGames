import { GET_ALLGAMES, GET_GAME_DETAIL, ORDER_GAMES, FILTER_GENDER_GAMES, FILTER_GAMES_DB_API, CLEAN_DETAIL} from "./actions";

const initialState = {
    allGames: [],
    searchedGames: [],
    gameDetails: {}
}

const rootReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_ALLGAMES: return {
            ...state,
            allGames: action.payload
        }

        case GET_GAME_DETAIL: return {
            ...state,
            gameDetails: action.payload
        }
        
        case CLEAN_DETAIL: return {...state, gameDetails: {}};

        default:
            return {...state}

    }
}

export default rootReducer;