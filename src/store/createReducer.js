import { combineReducers } from "redux";

export default function createReducer(asyncReducers) {
  const reducers = {
    ...asyncReducers
  };
  return combineReducers(reducers);
}
