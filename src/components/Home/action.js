import userService from "../../services/userService";
import utilService from "../../services/utilService";
import actionTypes from "../../store/actionTypes";

export const getObjectPending = () => ({
  type: actionTypes.GET_OBJECTS_PENDING
});

export const getObjectSuccess = (objects, info) => ({
  type: actionTypes.GET_OBJECTS_SUCCESS,
  objects,
  info
});

export const getObjectFailure = error => ({
  type: actionTypes.GET_OBJECTS_FAILURE,
  error
});

export const getObjects = (size, page) => dispatch => {
  dispatch(getObjectPending());

  userService.getObjects(size, page).then(
    result => {
      const objects = result.records.map(record => utilService.parseObject(record));
      dispatch(getObjectSuccess(objects, result.info));
    },
    error => {
      dispatch(getObjectFailure(error));
    }
  );
};
