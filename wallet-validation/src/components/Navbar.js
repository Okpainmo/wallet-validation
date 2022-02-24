import React from 'react';
import '../assets/styles/css/navbar.css';
import BrandLogo from '../assets/images/favicon.ico';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="my-nav">
        <ul>
          <li className="nav-item">
            <Link to="/Testing" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">
              About
            </a>
          </li>
          <Link to="/">
            <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          </Link>

          <li className="nav-item">
            <a className="nav-link" href="google.com">
              How it works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light for-mobile">
        <div className="container-fluid">
          <Link to="/">
            <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="google.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
