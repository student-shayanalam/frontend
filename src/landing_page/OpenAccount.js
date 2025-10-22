import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-2 mb-3 fw-semibold fs-3 fs-md-2">
            Open a Zerodha account
          </h1>
          <p className="mb-4 fs-6 fs-md-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link
            to="/signup"
            className="btn btn-primary fs-5 px-4 py-2 mb-4"
            style={{
              minWidth: "180px",
              backgroundColor: "#387ED1",
              textDecoration: "none",
            }}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
