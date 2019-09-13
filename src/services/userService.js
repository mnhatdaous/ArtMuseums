import axios from "axios";
import apis from "./apiList";

const userService = {
  getObjects
};

function getObjects(size, page) {
  return new Promise((resolve, reject) => {
    const apiUrl = `${apis.getObjectApi}&size=${size}&page=${page}`;
    axios
      .get(apiUrl)
      .then(response => {
        if (response.statusText !== "OK") {
          reject(response.statusText);
        } else {
          resolve(response.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default userService;
