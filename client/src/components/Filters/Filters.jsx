import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterGamesDBorAPI, filterGenres, orderGames } from "../../redux/actions"


const Filters = () => {
    const dispatch = useDispatch();
    const allGenres = useSelector((state)=> state.genresGames);

    const ordenamiento = (event) => {
        event.preventDefault();
        dispatch(orderGames(event.target.value))
    }
    const filterGenre = (event) =>{ 
        event.preventDefault();
        dispatch(filterGenres(event.target.value))
    }
    const filterDbAPI = (event) => { dispatch(filterGamesDBorAPI(event.target.value)) } 

    return (
        <div className={style.contFilters}>
            <p>Filtrar juegos por:</p>
            <label>*Órden Alfabético:</label>
            <select name="Order" onChange={(event) => ordenamiento(event)}>
                <option value= "AllGames">All Games</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
                <option value="Rating">Rating</option>
            </select>
            <br/>
            <label>*Almacenamiento:</label>
            <select name="Datatype" onChange={(event) => filterDbAPI(event)} >
                <option value= "AllGames">All Games</option>
                <option value= "Stored Games">Stored Games</option>
                <option value= "Created Games">Created Games</option>
            </select>
            <br/>
            <label>*Géneros:</label>
            <select name="Filters" onChange={(event) => filterGenre(event)}>
                <option value="Genres">All Genres</option>
                {allGenres?.map((genre)=>{
                    return (
                    <option value={genre}>{genre}</option>
                    )
                })}                
            </select>
        </div>
    );
  }
  
  export default Filters;