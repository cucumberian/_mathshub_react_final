import React from "react";
import { useState } from "react";

import "./Card.scss";
import CardSide from "./CardSide/CardSide";

function Card({ cardObject, gameCardClickHandler, flipCardFetcher }) {
  const [isFlip, setIsFlip] = useState(false);

  const playSoundHandler = () => {
    const soundObject = new Audio(`/src/assets/${cardObject.audioSrc}`);
    soundObject.play();
  };

  const flipCardHandler = () => {
    console.log("Переворачиваю карту");
    setIsFlip((prev) => !prev);

    flipCardFetcher(cardObject);
  };

  return (
    <div
      className="card"
      onClick={() => {
        gameCardClickHandler(cardObject);
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
