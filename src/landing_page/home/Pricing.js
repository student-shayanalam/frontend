import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="/pricing"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            See pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Side */}
        <div className="col-12 col-md-8">
          <div className="row text-center">
            {/* Block 1 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center p-4">
              <h1 className="text-warning mb-2">₹0</h1>
              <p className="mb-0">Free account opening</p>
            </div>

            {/* Block 2 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center p-4">
              <h1 className="text-warning mb-2">₹0</h1>
              <p className="mb-0">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            {/* Block 3 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center p-4">
              <h1 className="text-warning mb-2">₹20</h1>
              <p className="mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
