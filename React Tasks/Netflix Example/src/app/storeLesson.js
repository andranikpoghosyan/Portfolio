import { configureStore } from "@reduxjs/toolkit";
import users_Slice from "./features/usersSlice";

const myFirstMiddleware = (store) => (next) => (action) => {
  if (action.type === "users/addUser") {
    const state = store.getState();
    const isUserExist = state.users.some(
      (user) => user.name === action.payload.user.name
    );
    if (!isUserExist) {
      return next(action);
    } else {
      alert("user@ arden ka");
      return;
    }
  }
  next(action);
};

const store = configureStore({
  reducer: {
    users: users_Slice,
  },
  middleware: [myFirstMiddleware],
});

export default store;
