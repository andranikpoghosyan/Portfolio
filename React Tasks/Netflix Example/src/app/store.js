import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./features/filmsSlice";

const store = configureStore({
  reducer: {
    films: filmsSlice,
  },
});

export default store;
