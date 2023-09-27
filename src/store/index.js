import { configureStore } from "@reduxjs/toolkit";

import slovaSlice from "./slova-slive";
import appStateSlice from "./appState-slice";

const store = configureStore({
  reducer: {
    slova: slovaSlice.reducer,
    appState: appStateSlice.reducer,
  },
});

export default store;
