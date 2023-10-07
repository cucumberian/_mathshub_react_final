import React from "react";

import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import LogoutButton from "../LogoutButton/LogoutButton";

import "./UserHeader.scss";

function UserHeader() {
  const { authUser } = useAuth();

  return (
    <div className="user_header">
      {authUser !== null && (
        <>
          <p>{authUser.email}</p>

          <LogoutButton />
        </>
      )}

      {authUser === null && (
        <>
          <p>
            <Link to="/login">Войдите</Link>
          </p>
          <p>или</p>
          <p>
            <Link to="/register">Зарегистрируйтесь</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default UserHeader;
