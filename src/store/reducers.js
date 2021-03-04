import { combineReducers } from "redux";
import bills from "./../Services/Bills/bills.reducer";
import users from "./../Services/Users/users.reducer";

const makeRootReducer = () => {
  return combineReducers({
    bills,
    users,
  });
};

export default makeRootReducer;
