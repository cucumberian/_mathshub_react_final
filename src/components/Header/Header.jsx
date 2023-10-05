import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameStateActions } from "../../store/gameState-slice";
import { STATE_TRAIN } from "../../store/gameState-slice";

import { userSliceActions } from "../../store/userSlice";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);
  const { isLoggedIn, email: userEmail } = useAuth();

  const checkboxWord = useMemo(
    () => (gameState === STATE_TRAIN ? "Train" : "Play"),
    [gameState]
  );

  const headerCheckboxChangeHandler = () => {
    dispatch(gameStateActions.toggleTrain());
  };

  const logoutHandler = () => {
    dispatch(userSliceActions.removeUser());
  };

  return (
    <>
      <p>header</p>

      <Navbar />

      <label>
        <input type="checkbox" onChange={headerCheckboxChangeHandler} />
        {checkboxWord}
      </label>

      <div>
        <p>{userEmail}</p>

        <button type="button" onClick={logoutHandler}>
          Выйти
        </button>
      </div>
    </>
  );
}

export default Header;
