import React from "react";
import Scores from "../Scores/Scores";
import { useMemo } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

import { Link } from "react-router-dom";

import "./GameOver.scss";

function GameOver() {
  const { authUser } = useAuth();
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

  return (
    <div className="game_over">
      <Scores />
      <p>Ошибок: {numErrors}</p>
      {authUser !== null && <Link to="/statistics">Посмотреть статистику</Link>}
    </div>
  );
}

export default GameOver;
