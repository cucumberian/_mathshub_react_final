import React from "react";
import { auth } from "../../firebase";

function LogoutButton({ buttonTitle }) {
  const logoutHandler = () => {
    auth.signOut();
  };

  return (
    <button type="button" onClick={logoutHandler}>
      {buttonTitle || "Выйти"}
    </button>
  );
}

export default LogoutButton;
