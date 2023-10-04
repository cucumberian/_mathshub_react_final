import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./Statistics.css";
import CategoryTable from "../components/Table/CategoryTable";

function Statistics() {
  const [uniqWords, setUniqWords] = useState({});

  const firebaseUrl = useSelector((store) => store.dbSettings.firebaseUrl);

  const userId = localStorage.getItem("userId");

  /// тут остановились
  const fetchUrl = `${firebaseUrl}/userAnswers/${userId}.json`;

  useEffect(() => {
    async function get_data() {
      const response = await fetch(fetchUrl);
      const json = await response.json();

      console.log("stats:", json);

      const uniqCards = Object.values(json).reduce((acc, item) => {
        if (!acc[item.categoryTitle]) {
          acc[item.categoryTitle] = {};
        } else {
          if (acc[item.categoryTitle][item.cardHash]) {
            // обновляем значения для статсичтики карточки
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

    get_data();
  }, []);

  return (
    <div>
      <h1>Статистика</h1>
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
    </div>
  );
}

export default Statistics;
