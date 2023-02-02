import React from 'react';
import { Link } from 'react-router-dom';

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
