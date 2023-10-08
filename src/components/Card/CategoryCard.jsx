import React from "react";
import { Link } from "react-router-dom";
import Image from "../../UI/Image";

import "./CategoryCard.scss";

function CategoryCard({ id, title, imageUrl }) {
  return (
    <div className="category_card">
      <Link to={`./category/${id}`}>
        <Image className="card_image" src={imageUrl} alt="картинка категории" />
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

export default CategoryCard;
