import React from "react";

import "./StatisticsPage.css";

import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import StatisticsTable from "../components/StatisticsTable/StatisticsTable";

function StatisticsPage() {
  const { authUser } = useAuth();

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
