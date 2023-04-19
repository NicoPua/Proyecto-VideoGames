import useGameDetail from "../../hooks/useGameDetail";

const Detail = () => {
    const game = useGameDetail();
    return (
      <div>
        {game.name? (<>
            <h2>Name: {game.name}</h2>
            <img src={game.image} alt=""/>
            <p>ID: {game.id}</p>
            <p>Platforms: {game.platforms.toString()}</p>
            <p>Description: {game.description}</p>
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.Genres.toString()}</p>
        </>) : (<h2>Loading</h2>)
        }
      </div>
    );
}

export default Detail;