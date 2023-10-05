import React from "react";

import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1>Ошибка 404</h1>
      <p>Запрашиваемая страница не найдена.</p>
      <Link to="/">На главную</Link>
    </>
  );
}

export default Page404;
