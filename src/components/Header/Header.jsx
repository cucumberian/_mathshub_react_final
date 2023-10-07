import React from "react";
import Navbar from "../Navbar/Navbar";
import UserHeader from "../UserHeader/UserHeader";
import GameStateCheckbox from "../GameStateCheckbox/GameStateCheckbox";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <>
      <Navbar />
      <h2>
        <Link to="/" title="Домашняя страница">
          Easy English
        </Link>
      </h2>
      <GameStateCheckbox />
    </>
  );
}

export default Header;
