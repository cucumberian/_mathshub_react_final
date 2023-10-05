import { createSlice } from "@reduxjs/toolkit";

const userSliceInitialState = {
  uid: null,
  email: null,
  token: null,
};

const userSliceConfig = {
  name: "user",
  initialState: userSliceInitialState,
  reducers: {
    setUser(state, { payload }) {
      state.uid = payload.uid;
      state.email = payload.email;
      state.token = payload.token;
    },

    removeUser(state) {
      state.uid = null;
      state.email = null;
      state.token = null;
    },
  },
};

const userSlice = createSlice(userSliceConfig);
const userSliceActions = userSlice.actions;

export default userSlice;

export { userSliceActions };
