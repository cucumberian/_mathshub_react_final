import { createSlice } from "@reduxjs/toolkit";

const TESTSTATUS = "test";
const GAMESTATUS = "game";

const initialAppStatusState = {
  gameState: TESTSTATUS,
  isTest: true,
};

const sliceAppStateConfig = {
  name: "appState",
  initialState: initialAppStatusState,
  reducers: {
    changeState(state) {
      state.isTest = !state.isTest;
    },
  },
};

const appStateSlice = createSlice(sliceAppStateConfig);

const appStateActions = appStateSlice.actions;

export default appStateSlice;

export { appStateActions };
