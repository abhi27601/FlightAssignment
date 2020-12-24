import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../reducers/auth";
import flightsReducer from "../reducers/flights";
import filtersReducer from "../reducers/filters";

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      
      flights: flightsReducer,
      auth: authReducer,
      filters:filtersReducer,
      
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
