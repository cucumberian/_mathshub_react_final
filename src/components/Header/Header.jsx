import React from "react";

import { createPortal } from "react-dom";

import "./Header.css";

function Header({ children }) {
  const header = document.getElementById("header");

  return <>{createPortal(<div>{children}</div>, header)}</>;
}

export default Header;
