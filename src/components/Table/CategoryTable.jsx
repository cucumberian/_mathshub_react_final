import React from "react";

function CategoryTable({ categoryTitle, categoryWords, sortFunc }) {
  console.log();

  return (
    <>
      <tr>
        <td>
          <b>{categoryTitle}</b>
        </td>
      </tr>
      {categoryWords
        .sort((a, b) => (a.word > b.word ? 1 : 0))
        .map((word) => {
          const percent = Number(
            (
              (word.correctCounter /
                (word.correctCounter + word.incorrectCounter)) *
              100
            ).toFixed(0)
          );

          return (
            <tr key={word.cardHash}>
              <td></td>
              <td>{word.word}</td>
              <td>{word.translation}</td>

              <td>{word.trainCounter}</td>
              <td>{word.correctCounter}</td>
              <td>{word.incorrectCounter}</td>
              <td>{Number.isFinite(percent) ? percent : ""}</td>
            </tr>
          );
        })}
    </>
  );
}

export default CategoryTable;
