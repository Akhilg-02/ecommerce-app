import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import thunk from 'redux-thunk';
import logger from "redux-logger";


const middleware = [thunk]

if(process.env.NODE_ENV=="development"){
  middleware.push(logger);
}
export const store = createStore(reducer,applyMiddleware(...middleware))


if (window.Cypress) {
    window.store = store
  }
