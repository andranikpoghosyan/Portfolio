import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    setFilterName: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      } else {
        const x = state.findIndex((color) => color === action.payload);
        state.splice(x, 1);
        return state;
      }
      return state;
    },
    clearFilter: () => [],
  },
});

export default filterSlice.reducer;
export const { setFilterName, clearFilter } = filterSlice.actions;
