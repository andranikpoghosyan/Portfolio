import { configureStore } from "@reduxjs/toolkit";
import personsSlice from "./features/personsSlice";
import filterSlice from "./features/filterSlice";
import chooseFilterSlice from "./features/chooseFilterSlice";

const store = configureStore({
  reducer: {
    persons: personsSlice,
    filter: filterSlice,
    chooseColor: chooseFilterSlice,
  },
});


export default store;
