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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <Link to="/">
            <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          </Link>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              How it works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pricing
            </Link>
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
                <Link to="/" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
