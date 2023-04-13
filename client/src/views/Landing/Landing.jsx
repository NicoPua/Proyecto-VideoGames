import { useHistory } from "react-router-dom"

const Landing = () => {
    const navigate = useHistory();
    const intro = () => navigate.push("/home");

    return (
      <div>
        <h1>ESTOY EN LANDING</h1>
        <button onClick={() => intro()}>BIENVENIDOS</button>
      </div>
    );
  }
  
  export default Landing;