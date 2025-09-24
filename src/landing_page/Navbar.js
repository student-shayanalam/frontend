import React from "react";

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
        <a className="navbar-brand" href="/home">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ maxWidth: "140px", width: "100%", height: "auto" }}
          />
        </a>
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
              <a className="nav-link active" aria-current="page" href="/home">
                Signup
              </a>
            </li>
            {/* About button */}
            <li className="nav-item">
              <button className="nav-link active btn btn-link" type="button">
                About
              </button>
            </li>
            {/* Product button */}
            <li className="nav-item">
              <button className="nav-link active btn btn-link" type="button">
                Product
              </button>
            </li>
            {/* Pricing button */}
            <li className="nav-item">
              <button className="nav-link active btn btn-link" type="button">
                Pricing
              </button>
            </li>
            {/* Support button */}
            <li className="nav-item">
              <button className="nav-link active btn btn-link" type="button">
                Support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
