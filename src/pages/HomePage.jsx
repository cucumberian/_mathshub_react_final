import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../components/Card/CategoryCard";

import "../components/CardsGrid/CardsGrid.scss";

function HomePage() {
  const categoriesCards = useSelector((store) => store.slova.categories);

  return (
    <>
      <h1>Категории слов</h1>
      <p>Выберите категорию для обучения</p>

      <div className="cards_grid_flex">
        {categoriesCards.map((card, index) => (
          <CategoryCard
            key={index}
            title={card.title}
            imageUrl={`/src/assets/${card.image}`}
            id={index}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
