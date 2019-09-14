import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import objectReducer from "./objectReducer";

// const middleware = [reduxThunk, logger];
const middleware = [reduxThunk];
const rootReducer = combineReducers({ objectReducer });

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
