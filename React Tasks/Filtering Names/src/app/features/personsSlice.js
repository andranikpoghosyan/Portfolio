import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../data/personsDataBase.json";

const personsStore = createSlice({
  name: "persons",
  initialState: data,
  reducers: {},
});

export let array = [];

export const selectAllPersons = (state) => state.persons;
export const selectFilterName = (state) => state.filter;
export const selectColors = (state) => state.chooseColor;

export const selectPersonsWithColorName = createSelector(
  [selectAllPersons, selectFilterName],
  (persons, filterName) => {
    
    if (filterName.length === 0) return persons;

    return persons.filter((person) => {
      return filterName.includes(person.favoritColor);
    });
  }
);

export default personsStore.reducer;
