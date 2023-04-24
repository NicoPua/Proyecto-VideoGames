import './App.css';

import Landing from "./views/Landing/Landing.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/Home/Home.jsx"
import Form from './views/Form/Form';

import { Route, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllGames, getAllPlatforms, getGenres } from './redux/actions';
import Detail from './views/Detail/Detail';


function App() {
  const allGenres = useSelector((state)=> state.genresGames);
  const [currentPage,setCurrentPage] = useState(1)

  const dispatch = useDispatch();
  
  useEffect(() => {  
    dispatch(getAllGames());
  },[dispatch])

  useEffect(() => {  
    dispatch(getGenres());
  },[dispatch])

  useEffect(()=>{
    dispatch(getAllPlatforms());
  },[dispatch])

  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && (<Route path='/'> <NavBar setCurrentPage={setCurrentPage}/> </Route>)}
      <Route exact path="/" component={Landing}/>

      <Route path="/home" >
        <Home allGenres={allGenres} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Route>

      <Route path="/about" component={About}/>
      <Route path="/detail/:idGame" component={Detail}/>
      
      <Route path="/create">
        <Form allGenres={allGenres}/>
      </Route>
    </div>  
  );
}

export default App;
