import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import CategoryCard from "../components/Card/CategoryCard";

import { useAnonymRedirect } from "../hooks/useAnonymRedirect";

function HomePage() {
  // const navigate = useNavigate();
  // const redirect = useAnonymRedirect("/login");
  // const userEmail = useSelector((store) => store.user.email);

  // if (!userEmail) {
  //   return <Navigate to="/login" />;
  // }

  const categoriesCards = useSelector((store) => store.slova.categories);

  return (
    <>
      <h1>Категории слов</h1>
      <p>Выберите категорию для обучения</p>

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
