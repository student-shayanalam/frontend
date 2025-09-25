import React from "react";

// Hero section component
function Hero() {
  return (
    // Main container with padding on Y-axis (top & bottom)
    <div className="container py-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Hero Image */}
          <img
            src="media/images/homeHero.png"
            alt="Home hero"
            className="img-fluid mb-4" // responsive image with bottom margin
            style={{ width: "100%", height: "auto" }} // keep full width & auto height
          />

          {/* Hero Title */}
          <h1
            className="mt-4 mb-3"
            style={{ fontWeight: 600, fontSize: "2.2rem" }}
          >
            Invest in everything
          </h1>

          {/* Subtitle / Description */}
          <p className="mb-4" style={{ fontSize: "1.1rem", color: "#444" }}>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          {/* Call-to-Action Button */}
          <button
            className="btn btn-primary fs-5 px-4 py-2 mb-4"
            style={{ minWidth: "180px" , backgroundColor: "#387ED1" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;