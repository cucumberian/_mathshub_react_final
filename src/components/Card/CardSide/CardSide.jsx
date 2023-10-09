import React from "react";
import { HiRefresh } from "react-icons/hi";
import { AiFillSound } from "react-icons/ai";

import { useSelector } from "react-redux";

import { STATE_TRAIN } from "../../../store/gameState-slice";

import "./CardSide.scss";

function CardSide({
  flipCardHandler,
  soundHandler,
  cardObject,
  word,
  ...props
}) {
  const gameState = useSelector((state) => state.gameState.gameState);

  return (
    <div className={` ${props.className} ${props.isFlip && "card_rotated"}`}>
      {gameState === STATE_TRAIN && !props.isFlip && (
        <>
          <AiFillSound
            className="card_sound action"
            title="Произношение"
            onClick={soundHandler}
          />

          <HiRefresh
            className="card_flip action"
            title="Перевернуть"
            onClick={flipCardHandler}
          />
        </>
      )}

      <div className="card_image ">
        <img src={`/src/assets/${cardObject.image}`} alt={cardObject.word} />
      </div>

      {gameState === STATE_TRAIN && <h4>{word}</h4>}
    </div>
  );
}

export default CardSide;
