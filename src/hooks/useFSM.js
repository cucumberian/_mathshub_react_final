import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";

export const STATE_INIT = "init";
export const STATE_START_GAME = "start_game";
export const STATE_SAY_WORD = "say_word";
export const STATE_USER_INPUT = "user_input";
export const STATE_CHECK_ANSWER = "check_answer";
export const STATE_GAME_OVER = "game_over";

// const gameStates = [
//   STATE_INIT,
//   STATE_START_GAME,
//   STATE_SAY_WORD,
//   STATE_USER_INPUT,
//   STATE_CHECK_ANSWER,
//   STATE_GAME_OVER,
// ];

function useFSM({ cards }) {
  const [state, setState] = useState(STATE_INIT);

  const transitions = {};

  transitions[STATE_INIT] = {
    init() {
      console.log("init: init()");
    },
    leave() {
      console.log("init: leave()");
    },
    gameInit() {
      console.log("init: gameInit");
      changeState(STATE_START_GAME);
    },
  };

  transitions[STATE_START_GAME] = {
    init() {
      console.log("start_game: init()");
    },
    leave() {},
  };

  const changeState = (newState) => {
    if (newState in transitions) {
      transitions[state].leave();
      setState(newState);
    }
  };

  const dispatch = (actionName, payload) => {
    // console.log("state =", state);
    // console.log("transitions =", transitions);
    const actions = transitions[state];
    // console.log("dispatch: actions =", actions);
    if (actionName in actions) {
      const action = actions[actionName];
      console.log(`dispatch: ${actionName}`);
      action(payload);
    } else {
      console.warn(`no action "${actionName}" in state "${state}"`);
    }
  };

  const gameOff = useCallback(() => {
    changeState(STATE_INIT);
  }, []);

  // useEffect чтобы выполнять action "init" по переходу в state
  //   useEffect(() => {
  //     const actions = transitions[state];
  //     const action = actions["init"];
  //     action();
  //   }, [state]);

  return {
    gameState: state,
    gameChangeState: changeState,
    gameDispatch: dispatch,
    gameOff: gameOff,
  };
}

export default useFSM;
