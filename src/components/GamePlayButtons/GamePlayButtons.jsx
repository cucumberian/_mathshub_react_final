import React from "react";
import { useSelector } from "react-redux";

import { STATE_TRAIN } from "../../store/gameState-slice";

function GamePlayButtons({ startHandler, repeatHandler }) {
  const gameState = useSelector((state) => state.gameState.gameState);

  return (
    <>
      {gameState !== STATE_TRAIN && (
        <div className="game_play_buttons">
          <button type="button" onClick={startHandler}>
            start
          </button>
          <button type="button" onClick={repeatHandler}>
            repeat
          </button>
        </div>
      )}
    </>
  );
}

export default GamePlayButtons;
