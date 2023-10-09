import React from "react";
import { useSelector } from "react-redux";

import { STATE_TRAIN } from "../../store/gameState-slice";
import { STATE_USER_INPUT } from "../../store/gameState-slice";

import { FaClockRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

import "./GamePlayButtons.scss";

function GamePlayButtons({ startHandler, repeatHandler }) {
  const gameState = useSelector((state) => state.gameState.gameState);

  return (
    <>
      {gameState !== STATE_TRAIN && (
        <div className="game_play_buttons">
          {gameState !== STATE_USER_INPUT ? (
            <button type="button" className="game_button">
              <FaPlay onClick={startHandler} title="Начать игру" />
            </button>
          ) : (
            <button type="button" className="game_button">
              <FaClockRotateLeft
                onClick={repeatHandler}
                title="Повторить слово"
              />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default GamePlayButtons;
