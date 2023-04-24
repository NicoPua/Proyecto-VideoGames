import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actions";

const SearchBar = ({setCurrentPage}) => {
  const [name,setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);        //Guardo el valor del input en un estado local.
  }

  const onSearch = (nameGame) => {
    dispatch(getGameByName(nameGame));  //Busco el juego por name.
  }

  useEffect(()=>{                       //Cuando busco, la página de /home se inicializa en 1.
    return (setCurrentPage(1))
  },[setCurrentPage])

  return (
    <div>
      <input type="search" onChange={handleChange}/>
      <button onClick={()=> onSearch(name) }>Buscar</button>
    </div>
  );
}
  
export default SearchBar;