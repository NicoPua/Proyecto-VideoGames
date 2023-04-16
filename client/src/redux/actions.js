

export const addFavorite = (character) =>{
    return function() {
        axios.post("http://localhost:3001/rickandmorty/fav", character)         //GUARDO la información de "character" en la URL/fav
        .then((res) => console.log("Personaje Agregado"));
    }
 }

export const getAllGames = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/rickandmorty/fav`);
        dispatch({ type: GET_FAVORITES, payload: response.data });
      };
} 


export const getCharacterDetail = (id) =>{
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/detail/${id}`);
        dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
}

export const filterCards = (gender) => { return { type: FILTER_FAVORITES, payload: gender } }

export const orderCards = (id) => { return { type: ORDER_FAVORITES, payload: id } }

export const cleanDetail = () => { return { type: CLEAN_DETAIL } };