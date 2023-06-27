import { createSlice } from "@reduxjs/toolkit";
export let initialColorValue = [];

const chooseFilterSlice = createSlice({
  name: "anotherFilter",
  initialState: initialColorValue,
  reducers: {},
});

export default chooseFilterSlice.reducer;
