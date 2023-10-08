import React from "react";
import Scores from "../Scores/Scores";
import { useMemo } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameStateActions } from "../../store/gameState-slice";

import { Link } from "react-router-dom";

import "./GameOver.scss";

function GameOver({ closeHandler }) {
  const userAnswers = useSelector((state) => state.gameState.userAnswers);

  const numErrors = useMemo(
    () => userAnswers.filter((answer) => answer.incorrect === 1).length,
    [userAnswers]
  );

  useEffect(() => {
    if (numErrors !== 0) {
      const sound = new Audio(
        "/src/assets/audio/mixkit-slow-sad-trombone-fail-472.wav"
      );
      sound.play();
    } else {
      const sound = new Audio(
        "/src/assets/audio/mixkit-winning-chimes-2015.wav"
      );
      sound.play();
    }
  }, []);

  const gameOverButtonClick = () => {
    closeHandler();
  };

  return (
    <div className="game_over">
      <Scores />
      <p>Ошибок: {numErrors}</p>
      <button type="button" onClick={gameOverButtonClick}>
        OK
      </button>
      <Link to="/statistics">Посмотреть статистику</Link>
    </div>
  );
}

export default GameOver;
