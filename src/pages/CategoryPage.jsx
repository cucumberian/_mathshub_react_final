import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { gameStateActions } from "../store/gameState-slice";
import { STATE_TRAIN } from "../store/gameState-slice";
import { STATE_GAME } from "../store/gameState-slice";
import { STATE_USER_INPUT } from "../store/gameState-slice";
import { STATE_GAME_OVER } from "../store/gameState-slice";

import Card from "../components/Card/Card";

import "./CategoryPage.css";

function CategoryPage() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const categoryId = useParams().categoryId;

  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );
  const cards = categoryValue.cards;

  const startButtonHandler = () => {
    const payload = { cards: cards };
    dispatch(gameStateActions.startGame(payload));
  };

  const repeatButtonHandler = () => {
    dispatch(gameStateActions.repeatWord());
  };

  return (
    <>
      <h1>Категория {categoryValue.title}</h1>

      {gameState !== STATE_TRAIN && (
        <div>
          <button type="button" onClick={startButtonHandler}>
            start
          </button>
          <button type="button" onClick={repeatButtonHandler}>
            repeat
          </button>
        </div>
      )}

      <div className="cards_grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            word={card.word}
            translation={card.translation}
            soundUrl={card.audioSrc}
            imageUrl={card.image}
            id={index}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
