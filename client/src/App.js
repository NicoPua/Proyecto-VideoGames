import './App.css';

import Landing from "./views/Landing/Landing.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/Home/Home.jsx"
import Form from './views/Form/Form';

import { Route, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllGames } from './redux/actions';

function App() {
  const games = useSelector((state) => state.filterGames);
  const dispatch = useDispatch();
  
  useEffect(() => {  
    dispatch(getAllGames());
  },[])
  
  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && (<Route path='/'> <NavBar /> </Route>)}
      <Route exact path="/" component={Landing}/>
      <Route path="/home" >
        <Home games={games}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/create" component={Form}/>
    </div>
      
  );
}

export default App;
