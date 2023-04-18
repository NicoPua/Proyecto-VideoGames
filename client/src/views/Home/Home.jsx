import Card from "../../components/Card/Card.jsx";
import style from "./Home.module.css"   //CSS

import Paginado from "../../components/Paginado/Paginado.jsx";

//import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { filterGenres, orderGames } from "../../redux/actions.js";
import { useState } from "react";


const Home = ({games}) => {
    const dispatch = useDispatch();
        
    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPag] = useState(15);
    //const [order,setOrder] = useState(" ");
    //const [loading, setLoading] = useState(true)

    const lastGameIndex = currentPage * gamesPag;
    const firstGameIndex = lastGameIndex - gamesPag;
    const currentGames = games.slice(firstGameIndex,lastGameIndex)

    const ordenamiento = (event) => { dispatch(orderGames(event.target.value)) }
    const filtro = (event) =>{ dispatch(filterGenres(event.target.value)) }

    return (
        <div className={style.globalCont}> 
            <div className={style.filtersCont}>
                <p>Filtrar juegos por:</p>
                <select name="Order" onChange={ordenamiento}>
                    <option value= "AllGames">All Games</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                    <option value="Rating">Rating</option>
                </select>
                <br/>
                <select name="Datatype" onChange={filtro}>
                    <option value= "AllGames">All Games</option>
                    <option value= "Stored Games">Stored Games</option>
                    <option value= "Created Games">Created Games</option>
                </select>
            </div>

            <div className={style.contVideogames}>
                <h2>Videogames:</h2>

                <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} cantGames={games.length} gamesPag={gamesPag} />

                <div className={style.ContCards}>
                    {currentGames?.map(({id,name,genres,image,rating,createinDb}) => {
                        return(
                            <Card
                                key={id}
                                id={id}
                                name={name? name : "Videogame Name"}
                                genres={genres}
                                image={image? image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_87107202_vector-8-bit-pixel-art-phrase-new-game-and-start-retro-game-interface-glitch-vhs-effect.html&psig=AOvVaw2yGCA_ahRrsZLn8-aUzAJy&ust=1681872172296000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjt-py0sv4CFQAAAAAdAAAAABAE"}
                                rating={rating}
                                createinDb={createinDb}
                            />
                        );
                    })}
                </div> 
            </div>
        </div>
    )
}
  
export default Home;