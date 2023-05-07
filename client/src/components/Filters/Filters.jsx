import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { cleanInfoFilters, filterGamesDBorAPI, filterGenres, getAllGames, orderGames } from "../../redux/actions"

const Filters = ({allGenres, setCurrentPage, filterInfo}) => {
    const dispatch = useDispatch();
    
    const ordenamiento = (event) => {
        dispatch(orderGames(event.target.value))    //Hago dispatch a OrderGames para ordenar los juegos según el filtro aplicado.
        setCurrentPage(1);
    }
    const filterGenre = (event) =>{ 
        dispatch(filterGenres(event.target.value))  //Hago dispatch a filterGenres para filtrar los juegos según el género.
        setCurrentPage(1);
    }
    const filterDbAPI = (event) => { 
        dispatch(filterGamesDBorAPI(event.target.value)) //Hago dispatch a filterGamesDBorAPI para filtrar los juegos según el tipo.
        setCurrentPage(1);
    } 

    const showAllVideogames = () =>{
        dispatch(cleanInfoFilters());
        dispatch(getAllGames());
    }

    return (
        <div className={style.contFilters}>
            <div className={style.imgsCont}>
                <a target="_blank" rel="noopener noreferrer" href='https://www.soyhenry.com/'>
                    <img alt="img" className={style.imgs} src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
                </a>

                <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicoPua'>
                    <img alt="img" className={style.imgs} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                </a>

                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gonzalo-nicolas-pua-a962901b6/'>
                    <img alt="img" className={style.imgs} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
                </a>

                <a target="_blank" rel="noopener noreferrer" href='https://es.reactjs.org/'>
                    <img alt="img" className={style.imgs} src="http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png"/>
                </a>
            </div> 
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
            <br/>
            <button onClick={()=>showAllVideogames()}>Mostrar todos los Videojuegos</button>
            <p>Filtros Aplicados:</p>
            <ul>
                {filterInfo.length === 0? <li>Sin filtros.</li> 
                : (filterInfo.length > 6)? <li>Límite de filtros.</li>
                : filterInfo.map((filter)=>{
                    return (
                        <div>
                            <button>X</button>
                            <li>{filter}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
  }
  
  export default Filters;