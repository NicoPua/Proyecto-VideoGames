import Card from "../../components/Card/Card.jsx";
import style from "./Home.module.css"   //CSS

import Paginado from "../../components/Paginado/Paginado.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Loading from "../../views/Loading/Loading";

import { useState } from "react";
import { useSelector } from "react-redux";

const Home = ({allGenres}) => {
    const games = useSelector((state) => state.filterGames);
    //Paginado----------------------------------------------------------
    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPag] = useState(15);    
    const lastGameIndex = currentPage * gamesPag;
    const firstGameIndex = lastGameIndex - gamesPag;
    const currentGames = games.slice(firstGameIndex,lastGameIndex); 
    //-------------------------------------------------------------------

    //Loading en Cards---------------------------------------------------
    const [loading, setLoading] = useState(true)

    const changeLoad = () =>{
        setTimeout(() => {
            setLoading(false);
        }, 2000);  
    }

    if(loading){
        changeLoad();
        return (
            <div className={style.globalCont}>
                <div className={style.filtersCont}>
                    <Filters allGenres={allGenres} setCurrentPage={setCurrentPage}/>
                </div>
                <div className={style.contVideogames}>
                    <div className={style.contPags}>
                        <h2 className={style.Title}>🕹️ Videogames:</h2>
                        <Loading/>
                    </div>
                </div>
            </div>
        )
    }
    //-------------------------------------------------------------------

    return (
        <div className={style.globalCont}> 
            <div className={style.filtersCont}>
                <Filters allGenres={allGenres} setCurrentPage={setCurrentPage}/>
            </div>

            <div className={style.contVideogames}>
                <div className={style.contPags}>
                    <h2 className={style.Title}>🕹️ Videogames:</h2>
                    <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} cantGames={games.length} gamesPag={gamesPag} />
                </div>
                <div className={style.ContCards}>
                    {currentGames?.map(({id,name,genres,Genres,image,rating,createinDb}) => {
                        return(
                            <Card
                                key={id}
                                id={id}
                                name={name? name : "Videogame Name"}
                                genres={createinDb === true ? Genres : genres}
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