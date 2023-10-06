import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import CategoryTable from "../Table/CategoryTable";

import "./StatisticsTable.css";

function StatisticsTable({ userAnswers }) {
  const { getData, authUser } = useAuth();
  const [uniqWords, setUniqWords] = useState({});

  useEffect(() => {
    if (authUser !== null) {
      getData()
        .then((snapshot) => {
          console.log("get data");
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
      if (!acc[item.categoryTitle]) {
        acc[item.categoryTitle] = {};
      } else {
        if (acc[item.categoryTitle][item.cardHash]) {
          // обновляем значения для статсиcтики карточки
          acc[item.categoryTitle][item.cardHash] = {
            ...item,
            trainCounter:
              (item.isTrain ? 1 : 0) +
              acc[item.categoryTitle][item.cardHash].trainCounter,
            correctCounter:
              (!item.isTrain && item.isCorrect ? 1 : 0) +
              acc[item.categoryTitle][item.cardHash].isCorrect,
            incorrectCounter:
              (!item.isTrain && item.isCorrect ? 0 : 1) +
              acc[item.categoryTitle][item.cardHash].isCorrect,
          };
        } else {
          // инициализация статистики для карточки
          acc[item.categoryTitle][item.cardHash] = {
            ...item,
            trainCounter: item.isTrain ? 1 : 0,
            correctCounter: item.isCorrect ? 1 : 0,
            incorrectCounter: item.isCorrect ? 0 : 1,
          };
        }

        // acc[item.categoryTitle][item.cardHash] = item;
      }

      return acc;
    }, {});

    console.log("uniqCards.length =", Object.keys(uniqCards).length);
    console.log("uniqCards =", uniqCards);

    setUniqWords(uniqCards);
  }

  return (
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
  );
}

export default StatisticsTable;
