import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appStateActions } from "../../store/appState-slice";

function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.appState.isTest);
  const checkboxWord = useMemo(() => (status ? "Test" : "Play"), [status]);

  const headerCheckboxChangeHandler = () => {
    dispatch(appStateActions.changeState());
  };

  return (
    <>
      <p>header</p>
      <Navbar />
      <label>
        <input type="checkbox" onChange={headerCheckboxChangeHandler} />
        {checkboxWord}
      </label>
    </>
  );
}

export default Header;
