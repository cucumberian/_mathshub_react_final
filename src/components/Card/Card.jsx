import React from "react";
import { useState } from "react";

import CardSide from "./CardSide/CardSide";
import { useSelector } from "react-redux";

import { STATE_TRAIN } from "../../store/gameState-slice";

import "./Card.scss";

function Card({ cardObject, gameCardClickHandler, flipCardFetcher }) {
  const [isFlip, setIsFlip] = useState(false);
  const gameState = useSelector((state) => state.gameState.gameState);

  const playSoundHandler = (e) => {
    e.stopPropagation();
    const soundObject = new Audio(`/src/assets/${cardObject.audioSrc}`);
    soundObject.play();
  };

  const flipCardHandler = (e) => {
    e.stopPropagation();
    setIsFlip((prev) => !prev);
    flipCardFetcher(cardObject);
  };

  return (
    <div
      className="card"
      onClick={(e) => {
        if (gameState === STATE_TRAIN) playSoundHandler(e);
        else gameCardClickHandler(cardObject);
      }}
    >
      <CardSide
        isFlip={isFlip}
        className="card_front"
        soundHandler={playSoundHandler}
        flipCardHandler={flipCardHandler}
        cardObject={cardObject}
        word={cardObject.word}
      />

      <CardSide
        className="card_back"
        isFlip={isFlip}
        soundHandler={playSoundHandler}
        flipCardHandler={flipCardHandler}
        cardObject={cardObject}
        word={cardObject.translation}
      />
    </div>
  );
}

export default Card;
