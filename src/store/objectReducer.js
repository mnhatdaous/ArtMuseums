import actionTypes from "./actionTypes";

const initialState = {
  getObjectsPending: false,
  getObjectsSuccess: false,
  objects: [],
  info: {},
  getObjectsError: ""
};

export default function objectReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_OBJECTS_PENDING:
      return {
        ...state,
        getObjectsPending: true,
        getObjectsSuccess: false,
        info: {},
        getObjectsError: ""
      };
    case actionTypes.GET_OBJECTS_SUCCESS:
      return {
        ...state,
        getObjectsPending: false,
        getObjectsSuccess: true,
        objects: [...state.objects, ...action.objects],
        info: action.info,
        getObjectsError: ""
      };
    case actionTypes.GET_OBJECTS_FAILURE:
      return {
        ...state,
        getObjectsPending: false,
        getObjectsSuccess: false,
        getObjectsError: action.error
      };
    default:
      return state;
  }
}
