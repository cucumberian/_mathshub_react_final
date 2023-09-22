import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./Card.css";

function Card({ imageUrl, word, id }) {
  return (
    <div className="card">
      <img src={`/src/assets/${imageUrl}`} alt={word} className="card_image" />
      <h4>{word}</h4>
    </div>
  );
}

export default Card;
