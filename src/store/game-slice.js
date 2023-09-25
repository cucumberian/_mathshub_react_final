import { createSlice } from "@reduxjs/toolkit";

const initialGameState = {
  gameStatus: "test",
};

const sliceGameConfig = {
  name: "game",
  initialState: initialGameState,
  reducers: {
    changeState(state) {
      // game -> test
      if (state.name === "game") {
        state.name = "test";
      }
      // test -> game
      else if (state.name === "test") {
        state.name = "game";
      }
    },
    playSound() {
      // игрвем звук
    },
    stopGame(state) {
      if (state.name === "gaming") {
        // сброс игры
      }
    },
    startGame() {
      // создать массив угадываеых карточек
      const questions = [];
    },
  },
};
