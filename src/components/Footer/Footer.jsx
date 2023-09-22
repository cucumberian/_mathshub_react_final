import React from "react";
import { createPortal } from "react-dom";
import "./Footer.css";

function Footer({ children }) {
  const footer = document.getElementById("footer");

  return <>{createPortal(<div>{children}</div>, footer)}</>;
}

export default Footer;
