import React from "react";
import { useSelector } from "react-redux";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import "./Scores.scss";

function Scores() {
  const userAnswers = useSelector((store) => store.gameState.userAnswers);

  return (
    <div className="game_scores">
      {userAnswers.map((userAnswer) => {
        if (userAnswer.correct === 1) {
          return <AiFillHeart key={userAnswer.date} />;
        } else {
          return <AiOutlineHeart key={userAnswer.date} />;
        }
      })}
    </div>
  );
}

export default Scores;
