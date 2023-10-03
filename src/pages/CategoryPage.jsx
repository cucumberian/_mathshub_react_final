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
import Scores from "../components/Scores/Scores";

import "./CategoryPage.css";
import Modal from "../UI/Modal";
import GameOver from "../components/GameOver/GameOver";

function CategoryPage() {
  const categoryId = useParams().categoryId;
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );
  const firebaseUrl = useSelector((store) => store.dbSettings.firebaseUrl);
  const clickedCard = useSelector((store) => store.gameState.clickedCard);
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

  const gameCardClickHandler = (cardObject) => {
    // работает только в состоянии USER_INPUT
    if (gameState !== STATE_USER_INPUT) return;
    console.log("Игра, клик по карте");

    const payload = {
      word: cardObject.word,
      translation: cardObject.translation,
      categoryId: categoryId,
      isTrain: false,
    };

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

  async function initCheck() {
    if (gameState !== STATE_CHECK) return;

    console.log("Привет CHECK");
    // смотрим что кликнутая картока совпадает с произнесенной
    const trueCard = gameCards[0];
    const trueWord = trueCard.word;

    const word = clickedCard.word;

    console.log(trueWord, "?", word);

    const payload = {
      word: trueWord,
      translation: trueCard.translation,
      categoryTitle: categoryValue.title,
      isTrain: false,
      isCorrect: true,
      date: new Date().getTime(),
    };

    if (trueWord === word) {
      // прибавить балл пользователю
      // убать карточку
      // перейти в стостояние SAY
      payload.isCorrect = true;
      dispatch(gameStateActions.goodClick(payload));
    } else {
      // добавляем штрафной
      // переходим в user_input
      payload["isCorrect"] = false;
      dispatch(gameStateActions.badClick(payload));
    }

    // отправляем данные на сервер
    const userId = localStorage.getItem("userId");
    const serverUrl = `${firebaseUrl}/userAnswers/${userId}.json`;

    const response = await fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
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

  useEffect(() => {
    if (gameState !== STATE_TRAIN) {
      console.log("finishGame");
      dispatch(gameStateActions.finishGame());
    }
  }, [categoryId]);

  return (
    <>
      {gameState === STATE_GAME_OVER && (
        <Modal>
          <GameOver />
          <p>asdasdasdasd</p>
        </Modal>
      )}

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

      <Scores />

      <div className="cards_grid">
        {cards.map((card, index) => (
          <Card
            cardObject={card}
            key={index}
            gameCardClickHandler={gameCardClickHandler}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
