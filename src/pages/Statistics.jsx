import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./Statistics.css";
import CategoryTable from "../components/Table/CategoryTable";

function Statistics() {
  const [categories, setCategories] = useState([]);
  const [catWords, setCatWords] = useState({});

  const firebaseUrl = useSelector((store) => store.dbSettings.firebaseUrl);

  const userId = localStorage.getItem("userId");

  /// тут остановились
  const fetchUrl = `${firebaseUrl}/userAnswers/${userId}.json`;

  useEffect(() => {
    async function get_data() {
      const response = await fetch(fetchUrl);
      const json = await response.json();

      console.log("stats:", json);

      const catList = Object.values(json).map((item) => item.categoryTitle);

      const catSet = Array.from(new Set(catList));
      setCategories(catSet);

      console.log("catList: ", catList);
      console.log("catSet: ", catSet);

      for (let category of catSet) {
        console.log(category);
        const categoryWords = new Set(
          Object.values(json)
            .filter((item) => item.categoryTitle === category)
            .map((item) => item.word)
        );

        setCatWords((prev) => {
          const copy = structuredClone(prev);
          copy[category] = [];
          return copy;
        });

        categoryWords.forEach((word) => {
          setCatWords((prev) => {
            const copy = structuredClone(prev);
            copy[category].push({ title: word });
            return copy;
          });
        });

        console.log("words: ", categoryWords);
      }
    }

    get_data();
  }, []);

  useEffect(() => {
    console.log("catWords: ", catWords);
  }, [catWords]);

  //   const response = await fetch(fetchUrl);
  //   const json = await response.json();

  //   console.log("stats:", json);

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
          {Object.entries(catWords).map(([key, value]) => (
            <CategoryTable categoryTitle={key} categoryWords={value} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Statistics;
