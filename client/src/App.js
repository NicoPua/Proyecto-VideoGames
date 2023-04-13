import './App.css';
import Landing from "./views/Landing/Landing.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";


import { Switch, Route, useLocation} from "react-router-dom";

function App() {
  
  const location = useLocation();
  return (
      <Switch>
        {
          location.pathname !== '/'?
          <>
          <Route path='/' component={NavBar}/> 
          </> :
          <>
          <Route exact path="/" component={Landing}/>
          </>
        }
        <Route path="/about" component={About}/>
      </Switch>
  );
}

export default App;
