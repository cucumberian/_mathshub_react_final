import React from "react";

import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import LogoutButton from "../LogoutButton/LogoutButton";

import "./UserHeader.css";

function UserHeader() {
  const { authUser } = useAuth();

  return (
    <div>
      {authUser !== null && (
        <>
          <p>{authUser.email}</p>

          <LogoutButton />
        </>
      )}

      {authUser === null && (
        <p>
          <Link to="/login">Войдите</Link> или&nbsp;
          <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      )}
    </div>
  );
}

export default UserHeader;
