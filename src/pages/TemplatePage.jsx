import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { createPortal } from "react-dom";

function TemplatePage() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  return (
    <>
      <>{createPortal(<Header />, header)}</>

      <Outlet />

      <>{createPortal(<Footer />, footer)}</>
    </>
  );
}

export default TemplatePage;
