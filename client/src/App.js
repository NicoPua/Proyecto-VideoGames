import './App.css';
import axios from "axios";

import Landing from "./views/Landing/Landing.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/Home/Home.jsx"

import { Route, useLocation} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [games, setGames] = useState([]);

  
  const onSearch = (name) => {
    const URL = "http://localhost:3001";
    if(games.find((game) => game.name === name)) return alert("You are watching this game right now.")
    setGames([]);
    axios.get(`${URL}/videogames?name=${name}`)
    .then((response) => {
      let arrGames = response.data;
      const existGame = arrGames.find((game) => game.name === name )
      if(!existGame) return alert("This game doesn't exist.")

      arrGames = arrGames.sort((g1, g2) => { 
        if (g1.name > g2.name) return 1;
        if (g1.name < g2.name) return -1;
        return 0;
      })
      console.log(arrGames);
      setGames(arrGames);
    })
  }

  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && (<Route path='/'> <NavBar onSearch={onSearch}/> </Route>)}
      <Route exact path="/" component={Landing}/>
      <Route path="/home" >
        <Home games={games} />
      </Route>
      <Route path="/about" component={About}/>
    </div>
      
  );
}

export default App;
