import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

import { gameStateActions } from "../store/gameState-slice";
import { STATE_TRAIN } from "../store/gameState-slice";
import { STATE_GAME } from "../store/gameState-slice";
import { STATE_SAY } from "../store/gameState-slice";
import { STATE_USER_INPUT } from "../store/gameState-slice";
import { STATE_CHECK } from "../store/gameState-slice";
import { STATE_GAME_OVER } from "../store/gameState-slice";

import { Navigate } from "react-router-dom";
import Card from "../components/Card/Card";
import Scores from "../components/Scores/Scores";
import Modal from "../UI/Modal";
import GameOver from "../components/GameOver/GameOver";

import { sha256 } from "js-sha256";
import { shuffle } from "../utils/utils";

import "./CategoryPage.css";
import "../components/CardsGrid/CardsGrid.css";

function CategoryPage() {
  const { authUser, sendData } = useAuth();
  const categoryId = useParams().categoryId;
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );

  if (categoryValue === undefined) {
    return <Navigate to="/404" />;
  }

  const clickedCard = useSelector((store) => store.gameState.clickedCard);
  const cards = shuffle(categoryValue.cards);
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

  const createCardHash = ({ categoryTitle, word, translation }) => {
    const hashedString = `${categoryTitle}_${word}_${translation}`;
    const cardHash = sha256(hashedString);
    return cardHash;
  };

  const flipCardFetcher = async (cardObject) => {
    // не отправляю данные, если пользователь не залогинен
    if (authUser === null) return;

    // console.log("произносим карточку: ", cardObject);
    // const soundObject = new Audio(`/src/assets/${cardObject.audioSrc}`);
    const payload = {
      word: cardObject.word,
      translation: cardObject.translation,
      categoryTitle: categoryValue.title,
      isTrain: true,
      correct: 0,
      incorrect: 0,
      date: new Date().getTime(),
      cardHash: createCardHash({
        categoryTitle: categoryValue.title,
        word: cardObject.word,
        translation: cardObject.translation,
      }),
    };

    sendData(payload)
      .then(() => {
        console.log("Данные отправлены на сервер");
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных на сервер: ", error);
      });
  };

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
      correct: 0,
      incorrect: 0,
      date: new Date().getTime(),
      cardHash: createCardHash({
        categoryTitle: categoryValue.title,
        word: trueWord,
        translation: trueCard.translation,
      }),
    };

    if (trueWord === word) {
      // прибавить балл пользователю
      // убать карточку
      // перейти в стостояние SAY
      payload.correct = 1;
      dispatch(gameStateActions.goodClick(payload));
    } else {
      // добавляем штрафной
      // переходим в user_input
      payload["incorrect"] = 1;
      dispatch(gameStateActions.badClick(payload));
    }

    // отправляем данные на сервер если пользователь залогинен
    if (authUser !== null) {
      sendData(payload)
        .then(() => {
          console.log("Данные отправлены на сервер");
        })
        .catch((error) => {
          console.error("Ошибка при отправке данных на сервер:", error);
        });
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
          <p>Тестирование окончено</p>
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

      <div className="cards_grid_flex">
        {cards.map((card, index) => (
          <Card
            cardObject={card}
            key={index}
            gameCardClickHandler={gameCardClickHandler}
            flipCardFetcher={flipCardFetcher}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
