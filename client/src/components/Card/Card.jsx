import style from "./Card.module.css"

const Card = ({id,name,genres,platforms,image,rating,createinDb}) => {
    
    return(
        <div className={style.Card}>
            <h4>{name}</h4>
            <img className={style.imgCards} src={image} alt="img" />
            <p>Genre: {genres.toString()}</p>
            <p>Platforms: {platforms.toString()}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default Card;
