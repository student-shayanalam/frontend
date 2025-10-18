import React from "react";
import { Link } from "react-router-dom";

// Navbar component for site navigation
function Navbar() {
  return (
    // Main navbar container with Bootstrap classes for responsiveness and border
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        {/* Logo and brand link */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ maxWidth: "140px", width: "100%", height: "auto" }}
          />
        </Link>
        {/* Hamburger menu button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Signup link */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>

            {/* login link */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li> */}

            {/* About link */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* Product link */}
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            {/* Pricing link */}
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            {/* Support link */}
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
