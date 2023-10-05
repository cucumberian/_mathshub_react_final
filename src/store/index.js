import { configureStore } from "@reduxjs/toolkit";

import slovaSlice from "./slova-slive";
import gameStateSlice from "./gameState-slice";
import dbSettingsSlice from "./dbSettings-slice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    slova: slovaSlice.reducer,
    gameState: gameStateSlice.reducer,
    dbSettings: dbSettingsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
