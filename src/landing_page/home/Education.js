import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-2">
      <div className="row align-items-center">
        {/* Left Side (Image) */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education illustration"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Right Side (Content) */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="https://zerodha.com/varsity/"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="https://tradingqna.com/"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            TradingQ&amp;A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
