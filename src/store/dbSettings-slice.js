import { createSlice } from "@reduxjs/toolkit";

const initialDbSettingsState = {
  firebaseUrl:
    "https://easy-english-4604a-default-rtdb.europe-west1.firebasedatabase.app",
};

const sliceSlovaConfig = {
  name: "dbSettings",
  initialState: initialDbSettingsState,
  reducers: {},
};

const dbSettingsSlice = createSlice(sliceSlovaConfig);

export default dbSettingsSlice;
