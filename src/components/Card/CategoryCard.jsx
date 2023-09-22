import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

function CategoryCard({ id, title, image }) {
  return (
    <div className="card">
      <Link to={`./category/${id}`}>
        <img src={image} alt="картинка категории" />
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

export default CategoryCard;
