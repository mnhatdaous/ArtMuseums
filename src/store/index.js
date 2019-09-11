import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import createReducer from "./createReducer";

const middleware = [reduxThunk, logger];
// const middleware = [reduxThunk];

const store = createStore(
  createReducer(),
  compose(applyMiddleware(...middleware))
);

export default store;
