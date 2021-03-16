import axios from "axios";

export const apiGET = (url = "", params = "") => {
  return axios
    .get(`${url}${params}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log("err", err));
};
