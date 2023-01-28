import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/contact">Где мы?</Link>
      </nav>
    </div>
  );
};

export default Header;
