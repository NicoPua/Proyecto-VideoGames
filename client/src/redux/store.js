import { createStore, applyMiddleware, compose } from "redux";      //Redux
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"; 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(        //Redux
  rootReducer,                    //Redux
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;             //Redux