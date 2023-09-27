import { createSlice } from "@reduxjs/toolkit";

export const STATE_TRAIN = "train";
export const STATE_GAME = "game";
export const STATE_USER_INPUT = "user_input";
export const STATE_GAME_OVER = "game_over";

const initialGameState = {
  gameState: STATE_TRAIN,
  cards: [],
};

const gameStateSliceConfig = {
  name: "gameState",
  initialState: initialGameState,
  reducers: {
    toggleTrain(state) {
      if (state.gameState !== STATE_TRAIN) {
        state.gameState = STATE_TRAIN;
      } else {
        state.gameState = STATE_GAME;
      }
    },
    startGame(state, action) {
      if (state.gameState !== STATE_GAME) return;

      // создаем массив
      const shuffle = (arr) => {
        const shuffledArray = structuredClone(arr);
        // перемешиваем
        return shuffledArray;
      };
      const cards = shuffle(action.payload.cards);
      state.cards = cards;
      console.log("startGame, payload =", action.payload);
      console.log("startGame, cards =", cards);

      // озвучиваем
      const first_card = cards[0];
      console.log("озвучиваю: ", first_card);

      // перейти в сотсояние USER_INPUT
      state.gameState = STATE_USER_INPUT;
    },

    repeatWord(state) {
      if (state.gameState !== STATE_USER_INPUT) return;

      const cards = [...state.cards];

      console.log("\nrepeat  word");
      console.log("reapeatWord cards=", cards);
      console.log("state.gameState =", state.gameState);

      const first_card = state.cards[0];
      console.log("озвучиваю: ", first_card);
    },
  },
};

const gameStateSlice = createSlice(gameStateSliceConfig);

const gameStateActions = gameStateSlice.actions;

export default gameStateSlice;

export { gameStateActions };
