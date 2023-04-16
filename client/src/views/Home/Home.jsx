import Card from "../../components/Card/Card.jsx";
import style from "./Home.module.css"

const Home = ({games}) => {
    //select Order: onChange={ordenamiento}
   
    return (
        <div className={style.globalCont}> 
            <div className={style.contVideogames}>
                <h2>Videogames:</h2>
                <div className={style.ContCards}>
                    {games.map(({id,name,genres,platforms,image,rating,createinDb}) => {
                        return(
                            <Card
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