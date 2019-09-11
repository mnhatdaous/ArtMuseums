import store from ".";
import createReducer from "./createReducer";

const asyncReducers = {};

export const register = (scope, reducer) => {
  asyncReducers[scope] = reducer;
  store.replaceReducer(createReducer(asyncReducers));
};
