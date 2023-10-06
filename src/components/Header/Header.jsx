import React from "react";
import { useMemo } from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameStateActions } from "../../store/gameState-slice";
import { STATE_TRAIN } from "../../store/gameState-slice";

import UserHeader from "../UserHeader/UserHeader";

function Header() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);

  const checkboxWord = useMemo(
    () => (gameState === STATE_TRAIN ? "Train" : "Play"),
    [gameState]
  );

  const headerCheckboxChangeHandler = () => {
    dispatch(gameStateActions.toggleTrain());
  };

  return (
    <>
      <p>header</p>

      <Navbar />

      <label>
        <input type="checkbox" onChange={headerCheckboxChangeHandler} />
        {checkboxWord}
      </label>

      <UserHeader />
    </>
  );
}

export default Header;
