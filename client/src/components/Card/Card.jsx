
const Card = ({id,name,platforms,image,rating,createinDb}) => {
    
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt="img" />
            <p>Platforms: {platforms.toString()}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default Card;
