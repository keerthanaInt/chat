import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState: {
    isLogin: false,
    loggedUserData: null,
  },
  reducers: {
    changeAuthStatus(state, action) {
      state.isLogin = action.payload;
    },
    storeLoginDetails(state, action) {
      state.loggedUserData = action.payload;
    },
  },
});

export const { changeAuthStatus, storeLoginDetails } = AuthReducer.actions;
export default AuthReducer.reducer;
