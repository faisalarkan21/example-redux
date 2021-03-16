import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  
  const store = createStore(
    rootReducer(),
    preloadedState,
    applyMiddleware(...[thunkMiddleware, logger])
  );
  return store;
}
