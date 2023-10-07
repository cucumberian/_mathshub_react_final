import React from "react";

import { CgMenuGridR } from "react-icons/cg";

import "./Navbar.scss";
import NavMenu from "../NavMenu/NavMenu";

function Navbar() {
  return (
    <div className="navbar_container">
      <label className="navbar_label">
        <CgMenuGridR className="navbar_button" title="Меню" />
        <input type="checkbox" value="false" className="navbar_checkbox" />
        <NavMenu className="navbar_menu" />
      </label>
    </div>
  );
}

export default Navbar;
