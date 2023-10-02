import { createSlice } from "@reduxjs/toolkit";

export const STATE_TRAIN = "train";
export const STATE_GAME = "game";
export const STATE_SAY = "say";
export const STATE_USER_INPUT = "user_input";
export const STATE_CHECK = "check";
export const STATE_GAME_OVER = "game_over";

const initialGameState = {
  gameState: STATE_TRAIN,
  cards: [], // динамический массив карточек для игры
  clickedCard: null, // слово в карточке на которую нажал пользователь
  userAnswers: [], // список ответов пользователя
};

const gameStateSliceConfig = {
  name: "gameState",
  initialState: initialGameState,
  reducers: {
    toggleTrain(state) {
      if (state.gameState !== STATE_TRAIN) {
        state.gameState = STATE_TRAIN;
      } else {
        state.userAnswers = [];
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

      // перейти в соcтояние SAY
      state.gameState = STATE_SAY;
    },

    repeatWord(state) {
      // https://learn.javascript.ru/proxy
      if (state.gameState !== STATE_USER_INPUT) return;

      const first_card_proxy = state.cards[0];

      const first_card = Object.fromEntries(Object.entries(first_card_proxy));
      console.log("озвучиваю: ", first_card);
    },

    toSay(state) {
      state.gameState = STATE_SAY;
    },

    toCheck(state, action) {
      const payload = action.payload;

      state.clickedCard = payload;
      state.gameState = STATE_CHECK;
    },

    goodClick(state, action) {
      const payload = action.payload;
      console.log("good click");
      state.userAnswers.push(payload);
      const cards = state.cards.map((proxyCard) =>
        Object.fromEntries(Object.entries(proxyCard))
      );
      console.log("cards", cards);
      cards.shift();

      state.cards = cards;

      if (cards.length === 0) {
        state.gameState = STATE_GAME_OVER;
      } else {
        state.gameState = STATE_SAY;
      }
    },

    badClick(state, action) {
      const payload = action.payload;
      console.log("badClick");
      // state.userBadAnswers = state.userBadAnswers + 1;
      state.userAnswers.push(payload);
      state.gameState = STATE_USER_INPUT;
    },

    finishGame(state) {
      state.gameState = STATE_GAME;
      state.userAnswers = [];
    },

    changeState(state, action) {
      const newStateName = action.payload;
      state.gameState = newStateName;
    },
  },
};

const gameStateSlice = createSlice(gameStateSliceConfig);

const gameStateActions = gameStateSlice.actions;

export default gameStateSlice;

export { gameStateActions };
