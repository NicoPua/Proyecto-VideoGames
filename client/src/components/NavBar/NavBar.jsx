import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({setCurrentPage}) => {

  return (
    <div className={style.contBarra}>
      <div className={style.contOptions}>
        <Link to='/home'>
            <p>🏡HOME</p>
        </Link>

        <Link to='/create'>
            <p>🎮ADD YOUR GAME</p>
        </Link>

        <Link to='/about'>
            <p>📑ABOUT</p>
        </Link>
      </div>
      
      <div>
        <SearchBar setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}
  
export default NavBar;