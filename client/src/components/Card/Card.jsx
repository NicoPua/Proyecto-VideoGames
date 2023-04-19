import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({id,name,genres,image,rating}) => {
    return(
        <div className={style.Card}>
            <Link to={`/detail/${id}`}>
                <h4>{name}</h4>
            </Link>
            <img className={style.imgCards} src={image} alt="img" />
            <p>Genre: {genres.toString()}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default Card;
