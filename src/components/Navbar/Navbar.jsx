import React from "react";

import { CgMenuGridR } from "react-icons/cg";
import NavMenu from "../NavMenu/NavMenu";

import "./Navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = (e) => {
    if (e.currentTarget === e.target) return;
    setIsOpen(false);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar_container" onMouseLeave={closeMenu}>
      <div className="navbar_label">
        <CgMenuGridR
          className={`navbar_button ${isOpen ? "close" : ""}`}
          title="Меню"
          onClick={toggleMenu}
        />

        <NavMenu
          className={`navbar_menu + ${isOpen ? "" : "hidden"}`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
}

export default Navbar;
