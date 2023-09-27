import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "../components/Card/Card";

import useFSM from "../hooks/useFSM";
import { STATE_INIT } from "../hooks/useFSM";
import { STATE_START_GAME } from "../hooks/useFSM";

import { shuffle } from "../utils/utils";

import "./CategoryPage.css";

function CategoryPage() {
  const categoryId = useParams().categoryId;

  const isTest = useSelector((store) => store.appState.isTest);

  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );
  const cards = categoryValue.cards;
  const { gameState, gameDispatch, gameOff } = useFSM({ cards });

  useEffect(() => {
    if (isTest) {
      gameOff();
    } else {
      gameDispatch("gameInit");
    }
  }, [isTest]);

  const gameStartButtonHandler = () => {
    gameDispatch(STATE_START_GAME);
  };

  return (
    <>
      <h1>Категория {categoryValue.title}</h1>
      {gameState !== STATE_INIT && (
        <div>
          <button type="button" onClick={gameStartButtonHandler}>
            Start
          </button>
          <button type="button">Repeat</button>
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
