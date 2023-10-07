import React from "react";
import Card from "../Card/Card";

import "./CardsGrid.css";

function CardsGrid({ cards }) {
  return (
    <div className="cards_grid_flex">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          id={index}
        />
      ))}
    </div>
  );
}

export default CardsGrid;
