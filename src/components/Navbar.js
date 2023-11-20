import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'; // Import Login component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          NFQ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Trigger handleToggleLogin when the link is clicked */}
              <Link
                className="nav-link"
                to="/Login"
                onClick={() => Login.handleToggleLogin()}
              >
                SIGN IN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">
                CREATE ACCOUNT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Films">
                FILMS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Watchlist">
                WATCHLIST
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
