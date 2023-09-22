import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "../components/Card/Card";

import "./CategoryPage.css";

function CategoryPage() {
  const categoryId = useParams().categoryId;

  const categoryValue = useSelector(
    (store) => store.slova.categories[categoryId]
  );
  const cards = categoryValue.cards;

  return (
    <>
      <h1>Категория {categoryValue.title}</h1>

      <div className="cards_grid">
        {cards.map((card, index) => (
          <Card key={index} word={card.word} imageUrl={card.image} id={index} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
