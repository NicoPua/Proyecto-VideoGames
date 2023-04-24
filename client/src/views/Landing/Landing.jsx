import style from "./Landing.module.css"
import { useHistory } from "react-router-dom"

const Landing = () => {
    const navigate = useHistory();
    const intro = () => navigate.push("/home");

    return (
      <div className={style.contGlobal}>
        <div className={style.landing}>
          <h2 className={style.title}>Bienvenido a Videogames API</h2>
          <button className={style.enterButton} onClick={() => intro()}>START</button>
        </div>
      </div>
    );
  }
  
  export default Landing;