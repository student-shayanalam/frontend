import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navbar component for site navigation
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

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
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse Section */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Signup link */}
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/signup"
                onClick={handleClose}
              >
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
              <Link className="nav-link" to="/product" onClick={handleClose}>
                Product
              </Link>
            </li>
            {/* Pricing link */}
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={handleClose}>
                Pricing
              </Link>
            </li>
            {/* Support link */}
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={handleClose}>
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
