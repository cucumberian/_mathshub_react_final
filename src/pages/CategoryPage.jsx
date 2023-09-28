import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { gameStateActions } from "../store/gameState-slice";
import { STATE_TRAIN } from "../store/gameState-slice";
import { STATE_GAME } from "../store/gameState-slice";
import { STATE_SAY } from "../store/gameState-slice";
import { STATE_USER_INPUT } from "../store/gameState-slice";
import { STATE_CHECK } from "../store/gameState-slice";
import { STATE_GAME_OVER } from "../store/gameState-slice";

import Card from "../components/Card/Card";

import "./CategoryPage.css";

function CategoryPage() {
  const categoryId = useParams().categoryId;
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );
  const word = useSelector((store) => store.gameState.clickedCardWord);
  const cards = categoryValue.cards;
  const gameCards = useSelector((store) => store.gameState.cards);

  const startButtonHandler = () => {
    const payload = { cards: cards };
    dispatch(gameStateActions.startGame(payload));
  };

  const repeatButtonHandler = () => {
    if (gameState !== STATE_USER_INPUT) return;
    dispatch(gameStateActions.toSay());
  };

  const gameCardClickHandler = (word) => {
    // работает только в состоянии USER_INPUT
    if (gameState !== STATE_USER_INPUT) return;
    console.log("Игра, клик по карте");
    const payload = { word };
    dispatch(gameStateActions.toCheck(payload));
  };

  function initSay() {
    if (gameState !== STATE_SAY) return;
    const first_card = gameCards[0];
    console.log("произносим 0 карточку: ", first_card);
    const soundObject = new Audio(`/src/assets/${first_card.audioSrc}`);
    soundObject.play();
    dispatch(gameStateActions.changeState(STATE_USER_INPUT));
  }

  function initCheck() {
    if (gameState !== STATE_CHECK) return;

    console.log("Привет CHECK");
    // смотрим что кликнутая картока совпадает с произнесенной
    const trueCard = gameCards[0];
    const trueWord = trueCard.word;

    console.log(trueWord, "?", word);

    if (trueWord === word) {
      // прибавить балл пользователю
      // убать карточку
      // перейти в стостояние SAY
      const payload = { word: trueWord, isCorrect: true };
      dispatch(gameStateActions.goodClick(payload));
    } else {
      // добавляем штрафной
      // переходим в user_input
      const payload = { word: trueWord, isCorrect: false };
      dispatch(gameStateActions.badClick(payload));
    }
  }

  function initGameOver() {
    if (gameState !== STATE_GAME_OVER) return;
    // выводим количество ответов верных и неверных
    console.log("Game Over");
  }

  useEffect(() => {
    initSay();
    initCheck();
    initGameOver();
  }, [gameState]);

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
            gameCardClickHandler={gameCardClickHandler}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
