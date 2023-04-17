import style from "./Form.module.css"

const Form = () => {
    return(
        <div className={style.globalCont}>
            <h2>Create your game</h2>
            <form className={style.formCont}>
                <label>Name</label>
                <input type="text"/>
                <label>Imagen</label>
                <input/>

                <label>Descripción:</label>

                <label>Platforms</label>

                <label>Released</label>

                <label>Rating</label>

                <label>Géneros</label>

                <label for="generos">Selecciona tus géneros favoritos:</label>      
                <div>
                    <input type="checkbox" id="Action" name="generos[]" value="Action"/>
                    <label for="Action">Action</label>

                    <input type="checkbox" id="Indie" name="generos[]" value="Indie"/>
                    <label for="Indie">Indie</label>

                    <input type="checkbox" id="Adventure" name="generos[]" value="Adventure"/>
                    <label for="Adventure">Adventure</label>

                    <input type="checkbox" id="RPG" name="generos[]" value="RPG"/>
                    <label for="RPG">RPG</label>

                    <input type="checkbox" id="Strategy" name="generos[]" value="Strategy"/>
                    <label for="Strategy">Strategy</label>

                    <input type="checkbox" id="Shooter" name="generos[]" value="Shooter"/>
                    <label for="Shooter">Shooter</label>

                    <input type="checkbox" id="Casual" name="generos[]" value="Casual"/>
                    <label for="Casual">Casual</label>

                    <input type="checkbox" id="Simulation" name="generos[]" value="Simulation"/>
                    <label for="Simulation">Simulation</label>

                    <input type="checkbox" id="Puzzle" name="generos[]" value="Puzzle"/>
                    <label for="Puzzle">Puzzle</label>

                    <input type="checkbox" id="Arcade" name="generos[]" value="Arcade"/>
                    <label for="Arcade">Arcade</label>

                    <input type="checkbox" id="Platformer" name="generos[]" value="Platformer"/>
                    <label for="Platformer">Platformer</label>

                    <input type="checkbox" id="Racing" name="generos[]" value="Racing"/>
                    <label for="Racing">Racing</label>

                    <input type="checkbox" id="Massively Multiplayer" name="generos[]" value="Massively Multiplayer"/>
                    <label for="Massively Multiplayer">Massively Multiplayer</label>

                    <input type="checkbox" id="Sports" name="generos[]" value="Sports"/>
                    <label for="Sports">Sports</label>

                    <input type="checkbox" id="Fighting" name="generos[]" value="Fighting"/>
                    <label for="Fighting">Fighting</label>

                    <input type="checkbox" id="Family" name="generos[]" value="Family"/>
                    <label for="Family">Family</label>

                    <input type="checkbox" id="Board Games" name="generos[]" value="Board Games"/>
                    <label for="Board Games">Board Games</label>

                    <input type="checkbox" id="Educational" name="generos[]" value="Educational"/>
                    <label for="Educational">Educational</label>

                    <input type="checkbox" id="Card" name="generos[]" value="Card"/>
                    <label for="Card">Card</label>
                </div>
                <button>Create Game</button>
            </form>
        </div>
    )
}

export default Form;