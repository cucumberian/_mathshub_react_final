import React from "react";
import { useState } from "react";

import CardSide from "./CardSide/CardSide";
import { useSelector } from "react-redux";

import {
  STATE_GAME_OVER,
  STATE_TRAIN,
  STATE_USER_INPUT,
} from "../../store/gameState-slice";

import "./Card.scss";
import { set } from "firebase/database";

function Card({ cardObject, gameCardClickHandler, flipCardFetcher, cardHash }) {
  const [isFlip, setIsFlip] = useState(false);
  const gameState = useSelector((state) => state.gameState.gameState);
  const gameCards = useSelector((state) => state.gameState.cards);
  const [isInactive, setIsInactive] = useState(false);

  const playSoundHandler = (e) => {
    e.stopPropagation();
    const soundObject = new Audio(`/src/assets/${cardObject.audioSrc}`);
    soundObject.play();
  };

  React.useEffect(() => {
    setIsInactive(false);
  }, [gameState !== STATE_GAME_OVER]);

  const flipCardHandler = (e) => {
    e.stopPropagation();
    setIsFlip((prev) => !prev);
    flipCardFetcher(cardObject);
  };

  return (
    <div
      className={`card ${isInactive ? "inactive" : ""}`}
      onClick={(e) => {
        if (isInactive) return;
        if (gameState === STATE_TRAIN && !isFlip) playSoundHandler(e);
        else if (gameState === STATE_USER_INPUT) {
          const isCorrect = gameCards[0].word === cardObject.word;
          setIsInactive(isCorrect);

          gameCardClickHandler(cardObject);
        }
      }}
      onMouseLeave={() => {
        setIsFlip(false);
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
