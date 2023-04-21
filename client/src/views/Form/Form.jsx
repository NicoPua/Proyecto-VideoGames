import { useDispatch, useSelector } from "react-redux"
import style from "./Form.module.css"
import {  useState } from "react"
import { createGames } from "../../redux/actions"

const Form = ({allGenres}) => {
    const allPlatforms = useSelector((state) => state.allPlatforms)
    const dispatch = useDispatch();

    const [gameData,setGameData] = useState({
        name:"",
        image:"",
        description:"",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    })

    const handleChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;
        setGameData({...gameData, [prop]: value})
    }

    const AddPlatform = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;
        if(isChecked){
            setGameData({...gameData, platforms: [...gameData.platforms, event.target.value] })
        }else{
            setGameData({...gameData, platforms: gameData.platforms.filter((plat) => plat !== Value)})
        }
    }
    const AddGenres = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;
        if(isChecked){
            setGameData({...gameData, genres: [...gameData.genres, event.target.value] })
        }else{
            setGameData({...gameData, genres: gameData.genres.filter((gen) => gen !== Value)})
        }
    }

    const handleSubmit = (event) => {
        dispatch(createGames(gameData));
    }


    return(
        <div className={style.globalCont}>
            <div className={style.contForm}>
                <h2>ADD YOUR GAME</h2>

                <form onSubmit={handleSubmit} className={style.formCont}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleChange} value={gameData.name}/>

                    <label htmlFor="image">Image URL:</label>
                    <input type="url" name="image" onChange={handleChange} value={gameData.image}></input>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" onChange={handleChange} value={gameData.description}></textarea>

                    <label htmlFor="platforms">Platforms:</label>
                    <div>
                        {allPlatforms?.map((plat)=>{
                                return (<>
                                    <input type="checkbox" onClick={(event) => AddPlatform(event)} value={plat}/>
                                    <label key={plat} htmlFor={plat}>{plat}</label>
                                </>)     
                            })}
                    </div>

                    <label htmlFor="released">Released:</label>
                    <input type="date" name="released" onChange={handleChange} value={gameData.released}></input>
                    
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name="rating" onChange={handleChange} step="0.01" value={gameData.rating}></input>

                    <label htmlFor="genres">Choose your favorites Genres:</label>      
                    <div>
                        {allGenres?.map((genre)=>{
                                return (<>
                                    <input type="checkbox" onClick={(event) => AddGenres(event)} value={genre}/>
                                    <label htmlFor={genre}>{genre}</label>
                                </>)     
                            })}
                    </div>
                    <button>Create Game</button>
                </form>
            </div>
        </div>
    )
}

export default Form;