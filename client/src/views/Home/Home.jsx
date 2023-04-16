import Card from "../../components/Card/Card.jsx";
import style from "./Home.module.css"

const Home = ({games}) => {
    return (
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
    )
}
  
export default Home;