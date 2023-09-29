import React from "react";
import Scores from "../Scores/Scores";

import { useDispatch } from "react-redux";
import { gameStateActions } from "../../store/gameState-slice";

import "./GameOver.css";

function GameOver() {
  const dispatch = useDispatch();

  const gameOverButtonClick = () => {
    dispatch(gameStateActions.finishGame());
  };

  return (
    <div className="game_over">
      <Scores />
      <button type="button" onClick={gameOverButtonClick}>
        OK
      </button>
    </div>
  );
}

export default GameOver;
