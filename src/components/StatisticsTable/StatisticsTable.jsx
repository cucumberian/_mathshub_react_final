import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ref } from "firebase/database";
import { set } from "firebase/database";

import CategoryTable from "../Table/CategoryTable";

import "./StatisticsTable.scss";
import { database } from "../../firebase";

function StatisticsTable() {
  const { getData, sendData, authUser } = useAuth();
  const [uniqWords, setUniqWords] = useState({});

  useEffect(() => {
    if (authUser !== null) {
      getData()
        .then((snapshot) => {
          if (snapshot.exists()) {
            processAnswers(snapshot.val());
          }
        })
        .catch(console.error);
    }
  }, [authUser]);

  function processAnswers(userAnswers) {
    console.log("userAnswers:", userAnswers);

    const uniqCards = Object.values(userAnswers).reduce((acc, item) => {
      const trainCounter = item.isTrain ? 1 : 0;
      const correctCounter = item.isTrain ? 0 : item.correct;
      const incorrectCounter = item.isTrain ? 0 : item.incorrect;

      if (!acc[item.categoryTitle]) {
        // случай если категории еще нет в общем объекте
        // добавляем категорию и карточку в общий объект
        acc[item.categoryTitle] = {
          [item.cardHash]: {
            ...item,
            trainCounter: trainCounter,
            correctCounter: correctCounter,
            incorrectCounter: incorrectCounter,
          },
        };
        return acc;
      }

      // сюда попадаем, если категория уже есть в общем объекте

      if (acc[item.categoryTitle][item.cardHash]) {
        // если карточка уже есть в категории, то
        // обновляем значения для статиcтики карточки
        acc[item.categoryTitle][item.cardHash] = {
          ...item,
          trainCounter:
            trainCounter + acc[item.categoryTitle][item.cardHash].trainCounter,
          correctCounter:
            correctCounter + acc[item.categoryTitle][item.cardHash].correct,
          incorrectCounter:
            incorrectCounter + acc[item.categoryTitle][item.cardHash].incorrect,
        };
      } else {
        // если карточки в категории нет, то добавляем её
        // инициализация статистики для карточки
        acc[item.categoryTitle][item.cardHash] = {
          ...item,
          trainCounter: trainCounter,
          correctCounter: correctCounter,
          incorrectCounter: incorrectCounter,
        };
      }

      return acc;
    }, {});

    console.log("uniqCards.length =", Object.keys(uniqCards).length);
    console.log("uniqCards =", uniqCards);

    setUniqWords(uniqCards);
  }

  const deleteUserStatisticsHandler = () => {
    const dbRef = ref(database, `/userAnswers/${authUser.uid}`);
    set(dbRef, {})
      .then(() => {
        console.log("Статистика удалена");
        processAnswers({});
      })
      .catch((error) => console.error("Ошибка при удалении статистики", error));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Words</th>
            <th>Translation</th>
            <th>Trained</th>
            <th>Correct</th>
            <th>Incorrect</th>
            <th>%</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(uniqWords).map(([catTitle, cards]) => {
            return (
              <CategoryTable
                key={catTitle}
                categoryTitle={catTitle}
                categoryWords={Object.values(cards)}
                sortFunc={(prevCard, card) => {
                  return prevCard.word < card.word ? 1 : 0;
                }}
              />
            );
          })}
        </tbody>
      </table>

      <button
        className="delete_stats_button"
        onClick={deleteUserStatisticsHandler}
      >
        Удалить статистику
      </button>
    </>
  );
}

export default StatisticsTable;
