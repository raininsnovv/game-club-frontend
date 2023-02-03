import React from "react";
import { Link } from "react-router-dom";
import logo from "./imgLogo.png";
import logoText from "./textLogo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <nav className={styles.nav}>
        {" "}
        <Link to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        {/* <img className={styles.logoText} src={logoText} alt="" /> */}
        <Link to="/login">
          <img className={styles.logoText} src={logoText} alt="" />{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
