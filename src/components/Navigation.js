import React from "react";
import "../styles/global.css";
import "../styles/burgermenu.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

function Navigation() {
  return (
    <Menu right width={"100%"}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
}

export default Navigation;
