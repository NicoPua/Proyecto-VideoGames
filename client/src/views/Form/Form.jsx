import style from "./Form.module.css"

import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createGames } from "../../redux/actions"

import validation from "./validation"

const Form = ({allGenres}) => {
    const allPlatforms = useSelector((state) => state.allPlatforms);
    const dispatch = useDispatch();

    const [gameData,setGameData] = useState({
        name:"",
        image:"",
        description:"",
        platforms: [],
        released: "",
        rating: 0,
        genres: []
    })

    const [errors,setErrors] = useState({
        name:"Agregar información.",
        image:"Agregar información.",
        description:"Agregar información.",
        released: "Agregar información.",
        rating: "Agregar información.",
    })

    const handleChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;

        setGameData({...gameData, [prop]: value})
        setErrors(validation({...gameData, [prop]: value}))
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

    const handleSubmit = () => {
        if((gameData.genres.length === 0 || gameData.platforms.length === 0)){ 
            return alert("Please, you must choose at least one genre and one platform.")
        }else{
            dispatch(createGames(gameData));
        }
    }

    const ratingInCero = (event) =>{
        if(!gameData.rating){
            event.target.value = 0;
        }
    }
    
    return(
        <div className={style.globalCont}>
            <div className={style.contForm}>
                <h2>🕹️ ADD YOUR GAME 🕹️</h2>

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
                    <input 
                        type="number"
                        name="rating" onBlur={(event)=> ratingInCero(event)}
                        onChange={handleChange} step="0.01"
                        value={gameData.rating}></input>

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

            <div className={style.infoValidation}>
                <h2>📌 Validaciones:</h2>
                <p>- Deberán cumplirse las condiciones de validación para almacenar el nuevo videojuego en la base de datos, de lo contrario, los datos no se guardarán.</p>
                <ul className={style.uList}>
                    <li className={errors.name? style.errorName: style.validName} >Name: {errors.name? errors.name : "Información correcta."}</li>
                    <li className={errors.image? style.errorImg: style.validImg}>Image: {errors.image? errors.image : "Información correcta."}</li>
                    <li className={errors.description? style.errorDes : style.validDes}>Description: {errors.description? errors.description : "Información correcta."}</li>
                    <li className={errors.released? style.errorRel: style.validRel}>Released: {errors.released? errors.released : "Información correcta."}</li>
                    <li className={errors.rating? style.errorRat: style.validRat}>Rating: {errors.rating? errors.rating : "Información correcta."}</li>
                </ul>
            </div>
        </div>
    )
}

export default Form;