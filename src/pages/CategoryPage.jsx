import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

import { gameStateActions } from "../store/gameState-slice";
import { STATE_TRAIN } from "../store/gameState-slice";
import { STATE_GAME } from "../store/gameState-slice";
import { STATE_SAY } from "../store/gameState-slice";
import { STATE_USER_INPUT } from "../store/gameState-slice";
import { STATE_CHECK } from "../store/gameState-slice";
import { STATE_GAME_OVER } from "../store/gameState-slice";

import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import Scores from "../components/Scores/Scores";
import Modal from "../UI/Modal";
import GameOver from "../components/GameOver/GameOver";

import { sha256 } from "js-sha256";
import { shuffle } from "../utils/utils";

import "./CategoryPage.scss";
import "../components/CardsGrid/CardsGrid.scss";
import GamePlayButtons from "../components/GamePlayButtons/GamePlayButtons";

function CategoryPage() {
  const navigate = useNavigate();
  const { authUser, sendData } = useAuth();
  const categoryId = useParams().categoryId;
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );

  if (categoryValue === undefined) {
    return navigate("/404");
  }

  const clickedCard = useSelector((store) => store.gameState.clickedCard);
  const cards = useMemo(() => shuffle(categoryValue.cards), [categoryValue]);
  const gameCards = useSelector((store) => store.gameState.cards);

  const startButtonHandler = () => {
    const payload = { cards: shuffle(cards) };
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
    setTimeout(() => {
      soundObject.play();
    }, 500);

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
      const sound = new Audio(
        "/src/assets/audio/mixkit-achievement-bell-600.wav"
      );
      sound.play();

      payload.correct = 1;
      dispatch(gameStateActions.goodClick(payload));
    } else {
      // добавляем штрафной
      // переходим в user_input
      const sound = new Audio(
        "/src/assets/audio/mixkit-arcade-game-jump-coin-216.wav"
      );

      sound.play();
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

  const modalCloseHandler = () => {
    dispatch(gameStateActions.finishGame());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      {gameState === STATE_GAME_OVER && (
        <Modal closeHandler={modalCloseHandler}>
          <GameOver />
        </Modal>
      )}

      <h1>Категория {categoryValue.title}</h1>

      <GamePlayButtons
        startHandler={startButtonHandler}
        repeatHandler={repeatButtonHandler}
      />

      <Scores />

      <div className="cards_grid_flex">
        {cards.map((card, index) => (
          <Card
            cardObject={card}
            key={index}
            gameCardClickHandler={gameCardClickHandler}
            flipCardFetcher={flipCardFetcher}
            cardHash={createCardHash({
              categoryTitle: categoryValue.title,
              word: card.word,
              translation: card.translation,
            })}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
