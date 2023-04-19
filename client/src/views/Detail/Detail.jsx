import useGameDetail from "../../hooks/useGameDetail";
import style from "./Detail.module.css";

const Detail = () => {
    const game = useGameDetail();
    return (
      <div className={style.contGame}>
        {game.name? (<>
          <h2>Game Information</h2>
          <div>
            <h3>{game.name}</h3>
            <img className={style.imgGame} src={game.image} alt=""/>
            <div>          
              {(game.createinDb === false)? <>
                <p>ID: {game.id}</p>
                <p>Platforms: {game.platforms?.toString()}</p>
                <p>Description: {game.description}</p>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating}</p>
                <p>Genres: {game.genres?.toString()}</p>
              </>:<>
                <p>ID: {game.id}</p>
                <p>Platforms: {game.platforms?.toString()}</p>
                <p>Description: {game.description}</p>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating}</p>
                <p>Genres: {(game.Genres?.map((genre)=> genre.name)).toString()}</p>
              </>}                                     
            </div>
          </div>
        </>) : (<h2>Loading</h2>)
        }
      </div>
    );
}

export default Detail;