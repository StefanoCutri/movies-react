import React, { useEffect, useRef } from "react";
import logoImg from "../assets/StefanoMovies-1.png";
import { SearchInput } from "./SearchInput";

import "../styles/navbar.css";

export const Navbar = () => {
  const navRef = useRef();
  // TODO: future implementation
  // const showNavbar = () => {
  //   navRef.current.classList.toggle("active");
  // };
  const backgroundRef = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        backgroundRef.current.classList.add("nav-colored");
        backgroundRef.current.classList.remove("nav-transparent");
      } else if (backgroundRef.current !== null) {
        backgroundRef.current.classList.add("nav-transparent");
        backgroundRef.current.classList.remove("nav-colored");
      }
    };
  }, [document.body.scrollTop, document.documentElement.scrollTop]);

  return (
    <nav className="navbar" ref={backgroundRef}>
      <div className="brand-logo">
        <img src={logoImg} alt="" />
      </div>
      <SearchInput navRef={navRef} />
      {/* <div className="toggle-button" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </div> */}
    </nav>
  );
};
