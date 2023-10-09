import React from "react";

import "./StatisticsPage.scss";

import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { gameStateActions } from "../store/gameState-slice";

import { Link } from "react-router-dom";
import StatisticsTable from "../components/StatisticsTable/StatisticsTable";

import { STATE_TRAIN } from "../store/gameState-slice";

function StatisticsPage() {
  const { authUser } = useAuth();
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState.gameState);

  React.useEffect(() => {
    if (gameState !== STATE_TRAIN) dispatch(gameStateActions.finishGame());
  }, []);

  return (
    <>
      <h1>Статистика</h1>
      {authUser !== null && (
        <>
          <p>{authUser.email}</p>
          <StatisticsTable />
        </>
      )}

      {authUser === null && (
        <>
          <p>
            Мы собираем статистику только у зарегистрированных пользователей.
          </p>
          <p>
            <Link to="/login">Войдите</Link> или{" "}
            <Link to="/register">зарегистрируйтесь</Link> чтобы мы начали
            собирать вашу статистику.
          </p>
        </>
      )}
    </>
  );
}

export default StatisticsPage;
