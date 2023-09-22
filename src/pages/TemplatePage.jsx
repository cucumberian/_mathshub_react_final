import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function TemplatePage() {
  return (
    <>
      <Header>
        <p>heading</p>
        <Navbar />
      </Header>

      <Outlet />

      <Footer>
        <p>footing</p>
      </Footer>
    </>
  );
}

export default TemplatePage;
