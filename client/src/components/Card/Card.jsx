import style from "./Card.module.css"

const Card = ({id,name,genres,platforms,image,rating,createinDb}) => {
    
    return(
        <div className={style.Card}>
            <h2>{name}</h2>
            <img src={image} alt="img" />
            <p>Genre: {genres.toString()}</p>
            <p>Platforms: {platforms.toString()}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default Card;
