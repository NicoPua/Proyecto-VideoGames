import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch}) => {
    return (
      <div>
        <div>
          <Link to='/home'>
              <p>HOME</p>
          </Link>

          <Link to='/about'>
              <p>ABOUT</p>
          </Link>
        </div>
        
        <div>
          <SearchBar onSearch={onSearch}/>
        </div>
      </div>
    );
  }
  
  export default NavBar;