import { configureStore } from "@reduxjs/toolkit";

import slovaSlice from "./slova-slive";
import gameStateSlice from "./gameState-slice";
import dbSettingsSlice from "./dbSettings-slice";

const store = configureStore({
  reducer: {
    slova: slovaSlice.reducer,
    gameState: gameStateSlice.reducer,
    dbSettings: dbSettingsSlice.reducer,
  },
});

export default store;
