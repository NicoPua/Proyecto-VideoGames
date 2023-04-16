import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [name,setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="search" onChange={handleChange}/>
      <button onClick={()=> onSearch(name) }>Buscar</button>
    </div>
  );
}
  
export default SearchBar;