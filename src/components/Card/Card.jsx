import React from "react";
import { useState } from "react";
import { useRef } from "react";

import { HiRefresh } from "react-icons/hi";
import { AiFillSound } from "react-icons/ai";

import "./Card.css";

function Card({
  imageUrl,
  word,
  translation,
  soundUrl,
  id,
  gameCardClickHandler,
}) {
  const [isFlip, setIsFlip] = useState(false);

  const playSoundHandler = () => {
    const soundObject = new Audio(`/src/assets/${soundUrl}`);
    soundObject.play();
  };

  const flipCardHandler = () => {
    console.log("Переворачиваю карту");
    setIsFlip((prev) => !prev);
  };

  return (
    <div
      className="card"
      onClick={() => {
        gameCardClickHandler(word);
      }}
    >
      <div className={`card_front ${isFlip && "card_rotated"}`}>
        <AiFillSound
          className="card_sound action"
          title="ЗВУК"
          onClick={playSoundHandler}
        />

        <HiRefresh
          className="card_flip action"
          title="ПЕРЕВЕРНУТЬ"
          onClick={flipCardHandler}
        />

        <img
          // src={`/src/assets/${imageUrl}`}
          alt={word}
          className="card_image "
        />
        <h4>{word}</h4>
      </div>

      <div className={`card_back ${isFlip && "card_rotated"}`}>
        <AiFillSound
          className="card_sound action"
          title="ЗВУК"
          onClick={playSoundHandler}
        />

        <HiRefresh
          className="card_flip action"
          title="ПЕРЕВЕРНУТЬ"
          onClick={flipCardHandler}
        />

        <img
          // src={`/src/assets/${imageUrl}`}
          alt={word}
          className="card_image "
        />
        <h4>{translation}</h4>
      </div>
    </div>
  );
}

export default Card;
