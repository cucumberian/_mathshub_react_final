import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const categories = useSelector((store) => store.slova.categories);
  const xxx = React.useMemo(() => Math.random());

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Категории</NavLink>
        </li>

        {categories.map((category, index) => {
          return (
            <li key={`${xxx}_${index}`}>
              <NavLink to={`/category/${index}`} relative="path">
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
  );
}

export default Navbar;
