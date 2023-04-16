import Card from "../components/Card/Card.jsx";

const Home = ({games}) => {
    return (
        <div>
        {
            games.map(({id,name,platforms,image,rating,createinDb}) => {
                return(
                    <Card
                        id={id}
                        name={name}
                        platforms={platforms}
                        image={image}
                        rating={rating}
                        createinDb={createinDb}
                    />
                )
            })
        }
        </div>
    )
}
  
export default Home;