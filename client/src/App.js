import './App.css';

import Landing from "./views/Landing/Landing.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/Home/Home.jsx"
import Form from './views/Form/Form';

import { Route, useLocation} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllGames, getGenres } from './redux/actions';
import Detail from './views/Detail/Detail';

function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {  
    dispatch(getAllGames());
  },[dispatch])

  useEffect(() => {  
    dispatch(getGenres());
  },[dispatch])
  
  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && (<Route path='/'> <NavBar /> </Route>)}
      <Route exact path="/" component={Landing}/>

      <Route path="/home" >
        <Home />
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/create" component={Form}/>
      <Route path="/detail/:idGame" component={Detail}/>
    </div>
      
  );
}

export default App;
