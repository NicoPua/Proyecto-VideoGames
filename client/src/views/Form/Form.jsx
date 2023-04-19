import style from "./Form.module.css"

const Form = ({allGenres}) => {
    return(
        <div className={style.globalCont}>
            <h2>Create your game</h2>
            <form className={style.formCont}>
                <label>Name</label>
                <input type="text"/>
                <label>Imagen</label>

                <label>Descripción:</label>

                <label>Platforms</label>
                
                <label>Released</label>

                <label>Rating</label>

                <label>Géneros</label>

                <label for="generos">Selecciona tus géneros favoritos:</label>      
                <div>
                    {allGenres?.map((genre)=>{
                            return (<>
                                <input type="checkbox" id={genre} name="generos[]" value={genre}/>
                                <label for={genre}>{genre}</label>
                            </>)     
                        })}
                </div>
                <button>Create Game</button>
            </form>
        </div>
    )
}

export default Form;