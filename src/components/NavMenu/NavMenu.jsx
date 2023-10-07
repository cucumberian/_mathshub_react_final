import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";

import "./NavMenu.scss";

function NavMenu({ className }) {
  const categories = useSelector((store) => store.slova.categories);
  const randNum = React.useMemo(() => Math.random());

  return (
    <div className={`nav_menu ${className}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="перейти на домашнюю страницу">
              Список категорий
            </NavLink>
          </li>

          {categories.map((category, index) => {
            return (
              <li key={`${randNum}_${index}`}>
                <NavLink
                  to={`/category/${index}`}
                  relative="path"
                  title={`перейти в категорию ${category.title}`}
                >
                  {category.title}
                </NavLink>
              </li>
            );
          })}

          <li>
            <NavLink to="statistics">Статистика</NavLink>
          </li>
        </ul>
      </nav>
      <UserHeader />
    </div>
  );
}

export default NavMenu;
