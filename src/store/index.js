import { configureStore } from "@reduxjs/toolkit";

import slovaSlice from "./slova-slive";
import gameStateSlice from "./gameState-slice";

const store = configureStore({
  reducer: {
    slova: slovaSlice.reducer,
    gameState: gameStateSlice.reducer,
  },
});

export default store;
