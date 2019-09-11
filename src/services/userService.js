import _ from "lodash";
import apis from "./apiList";

const userService = {
  getObjects
};

function getObjects(size, page) {
  return new Promise((resolve, reject) => {
    const apiUrl = `${apis.getObjectApi}&size=${size}&page=${page}`;

    fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      method: "GET"
    })
      .then(response => {
        if (response.status) {
          reject(constants.SOMETHING_WENT_WRONG);
        }
        return response.json();
      })
      .then(responseJson => {
        if (!_.isEmpty(responseJson.info)) {
          resolve(responseJson);
        } else {
          reject(constants.SOMETHING_WENT_WRONG);
        }
      })
      .catch(error => {
        reject(constants.SOMETHING_WENT_WRONG);
      });
  });
}

export default userService;
