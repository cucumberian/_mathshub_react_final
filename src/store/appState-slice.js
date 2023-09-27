import { createSlice } from "@reduxjs/toolkit";

const STATE_TRAIN = "train";
const STATE_GAME = "game";

const initialAppStatusState = {
  gameState: STATE_TRAIN,
};

const sliceAppStateConfig = {
  name: "appState",
  initialState: initialAppStatusState,
  reducers: {
    toggleTrain(state) {
      if (state.state !== STATE_TRAIN) {
      }
    },
  },
};

const appStateSlice = createSlice(sliceAppStateConfig);

const appStateActions = appStateSlice.actions;

export default appStateSlice;

export { appStateActions };
