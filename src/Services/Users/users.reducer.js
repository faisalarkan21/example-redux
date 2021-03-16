import { apiGET } from "../../utils/api";

const GET_USERS = "USERS/GET_USERS";
const ADD_NUMBER = "USERS/ADD_NUMBER";
const DECREMENT_NUMBER = "USERS/DECREMENT_NUMBER";
const MULTIPLE_NUMBER = "USERS/MULTIPLE_NUMBER";

export default function reducer(
  state = {
    dataTable: [],
  },
  action
) {
  // console.log("action", action);
  switch (action.type) {
    case GET_USERS:
      return { ...state, dataTable: action.payload };
    default:
      return state;
  }
}

export function addNumber(data) {
  // console.log("data", data);
  return { type: ADD_NUMBER, payload: data };
}

export function decrementNumber(data) {
  // console.log("data", data);
  return { type: DECREMENT_NUMBER, payload: data };
}

export function multipleNumber(data) {
  // console.log("data", data);
  return { type: MULTIPLE_NUMBER, payload: data };
}

export function getUsers(data) {
  return { type: GET_USERS, payload: data };
}

export const UsersAction = {
  getUsers: function (query = "") {
    // this is redux-thunk
    return function (dispatch) {
      // asynchronous
      apiGET(
        `https://5d371ebf86300e0014b64ae7.mockapi.io/api/v1/users${query}`
      ).then((data) => {
        // console.log("data", data);
        dispatch(getUsers(data));
      });
    };
  },
};
