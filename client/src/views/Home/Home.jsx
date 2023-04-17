import Card from "../../components/Card/Card.jsx";
import style from "./Home.module.css"   //CSS
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { getAllGames } from "../../redux/actions.js";

const Home = () => {
    //select Order: onChange={ordenamiento}
    const games = useSelector((state) => state.allGames);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllGames());
    },[dispatch])

    return (
        <div className={style.globalCont}> 
            <div className={style.contVideogames}>
                <h2>Videogames:</h2>
                <div className={style.ContCards}>
                    {games.map(({id,name,genres,platforms,image,rating,createinDb}) => {
                        return(
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                genres={genres}
                                platforms={platforms}
                                image={image}
                                rating={rating}
                                createinDb={createinDb}
                            />
                        );
                    })}
                </div> 
            </div>
            
            <div className={style.filtersCont}>
                <p>Filtrar juegos por:</p>
                <select name="Order">
                    <option value= "AllGames">All Games</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                    <option value="Rating">Rating</option>
                </select>

                <select name="Datatype">
                    <option value= "AllGames">All Games</option>
                    <option value= "Stored Games">Stored Games</option>
                    <option value= "Created Games">Created Games</option>
                </select>
            </div>
        </div>
    )
}
  
export default Home;