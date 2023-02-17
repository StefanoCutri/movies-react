import React, { useRef } from "react";
import logoImg from "../assets/StefanoMovies-1.png";
import { SearchInput } from "./SearchInput";

import "../styles/navbar.css";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src={logoImg} alt="" />
      </div>
      <SearchInput navRef={navRef} />
      <div className="toggle-button" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};
