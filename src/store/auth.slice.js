import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_STATE = {
  auth: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice;
