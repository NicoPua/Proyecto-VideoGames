import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actions";

const SearchBar = () => {
  const [name,setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const onSearch = (nameGame) => {
    dispatch(getGameByName(nameGame));
  }

  return (
    <div>
      <input type="search" onChange={handleChange}/>
      <button onClick={()=> onSearch(name) }>Buscar</button>
    </div>
  );
}
  
export default SearchBar;