import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch}) => {
    return (
      <div className={style.contBarra}>
        <div className={style.contOptions}>
          <Link to='/home'>
              <p>HOME</p>
          </Link>

          <Link to='/about'>
              <p>ABOUT</p>
          </Link>

          <Link to='/create'>
              <p>Create Game</p>
          </Link>
        </div>
        
        <div>
          <SearchBar onSearch={onSearch}/>
        </div>
      </div>
    );
  }
  
  export default NavBar;