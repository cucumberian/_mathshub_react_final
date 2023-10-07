import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { STATE_TRAIN, gameStateActions } from "../../store/gameState-slice";

import "./GameStateCheckbox.scss";

function GameStateCheckbox() {
  const dispatch = useDispatch();

  const gameState = useSelector((state) => state.gameState.gameState);

  const checkboxText = useMemo(
    () => (gameState === STATE_TRAIN ? "train" : "test"),
    [gameState]
  );

  const toggleHandler = () => {
    dispatch(gameStateActions.toggleTrain());
  };

  return (
    <div className="checkbox_container">
      <label id="game_switch" className="game_switch">
        <input type="checkbox" onChange={toggleHandler} value="true" />
        <span className="slider round"></span>
        {checkboxText}
      </label>
    </div>
  );
}

export default GameStateCheckbox;
