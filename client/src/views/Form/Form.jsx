import { useSelector } from "react-redux"
import style from "./Form.module.css"
import { useState } from "react"

const Form = ({allGenres}) => {
    const allPlatforms = useSelector((state) => state.allPlatforms)

    const [gameData,setVideogame] = useState({
        name:"",
        image:"",
        description:"",
        platforms: [],
        released: "",
        rating: undefined,
        genres: []
    })
    const AddPlatform = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;

        if(isChecked){
            setVideogame({...gameData, platforms: [...gameData.platforms, event.target.value] })
        }else{
            setVideogame({...gameData, platforms: gameData.platforms.filter((plat) => plat !== Value)})
        }
    }

    const AddGenres = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;

        if(isChecked){
            setVideogame({...gameData, genres: [...gameData.genres, event.target.value] })
        }else{
            setVideogame({...gameData, genres: gameData.genres.filter((gen) => gen !== Value)})
        }
    }

    return(
        <div className={style.globalCont}>
            <div className={style.contForm}>
                <h2>Add your game</h2>

                <form className={style.formCont}>
                    <label>Name</label>
                    <input type="text" name="name" value={gameData.name}/>

                    <label>Image URL:</label>
                    <input type="url" id="image" name="image" value={gameData.image}></input>

                    <label>Description:</label>
                    <textarea id="description" name="description" value={gameData.description}></textarea>

                    <label>Platforms:</label>
                    <div>
                        {allPlatforms?.map((plat)=>{
                                return (<>
                                    <input type="checkbox" onClick={(event) => AddPlatform(event)} value={plat}/>
                                    <label for={plat}>{plat}</label>
                                </>)     
                            })}
                    </div>

                    <label>Released:</label>
                    <input type="date" id="released" name="released" value={gameData.released}></input>
                    
                    <label>Rating</label>
                    <input type="number" id="rating" name="rating" step="0.01" value={gameData.rating}></input>

                    <label>Choose your favorites Genres:</label>      
                    <div>
                        {allGenres?.map((genre)=>{
                                return (<>
                                    <input type="checkbox" onClick={(event) => AddGenres(event)} value={genre}/>
                                    <label for={genre}>{genre}</label>
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