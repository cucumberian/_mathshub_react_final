import { configureStore } from "@reduxjs/toolkit";

import slovaSlice from "./slova-slive";

const store = configureStore({ reducer: { slova: slovaSlice.reducer } });

export default store;
