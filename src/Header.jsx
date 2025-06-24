import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container">
          {/* Logo with Link to home */}
          <Link to="/" className="navbar-brand">
            <img
              src="/assets/logo.png"
              alt="Logo"
              height="60"
              className="logo"
            />
          </Link>

          {/* Navbar Toggler */}
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item rounded-pill px-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item rounded-pill px-3">
                <a className="nav-link" href="#about__section">
                  About Us
                </a>
              </li>
              <li className="nav-item rounded-pill px-3">
                <a className="nav-link" href="#project__section">
                  Projects
                </a>
              </li>
              <li className="nav-item rounded-pill px-3">
                <a className="nav-link" href="#skill__section">
                  Gallary
                </a>
              </li>
              <li className="nav-item rounded-pill px-3">
                <a className="nav-link" href="#contact__section">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
