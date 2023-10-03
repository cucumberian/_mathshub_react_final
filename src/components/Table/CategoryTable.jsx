import React from "react";

function CategoryTable({ categoryTitle, categoryWords }) {
  return (
    <>
      <tr>
        <td>
          <b>{categoryTitle}</b>
        </td>
      </tr>
      {categoryWords.map((word) => (
        <tr>
          <td></td>
          <td>{word.title}</td>
          <td>{word.translation}</td>

          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </>
  );
}

export default CategoryTable;
