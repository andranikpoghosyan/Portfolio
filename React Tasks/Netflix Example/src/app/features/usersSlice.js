import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk("users/getAsync", async (url) => {
   await axios(url).then((res) => res.data);
});

const users_Slice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    deleteById(state, action) {
      return state.filter((user) => user.id !== +action.payload);
    },
    addUser(state, { payload }) {
      state.push(payload.user);
      return state;
    },
  },
});

export const { deleteById, addUser } = users_Slice.actions;
export default users_Slice.reducer;
