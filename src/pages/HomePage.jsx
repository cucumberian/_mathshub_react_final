import React from "react";

import { useSelector } from "react-redux";
import CategoryCard from "../components/Card/CategoryCard";

function HomePage() {
  const categoriesCards = useSelector((store) => store.slova.categories);

  return (
    <>
      <h1> Домашняя страница </h1>
      <h2>Список категорий</h2>

      <div className="cards_grid">
        {categoriesCards.map((card, index) => (
          <CategoryCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            id={index}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
