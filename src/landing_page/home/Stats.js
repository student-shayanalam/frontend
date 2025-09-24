import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left side - Text */}
        <div className="col-12 col-md-6 px-3 py-4">
          <h1 className="fs-3 fs-md-2 mb-4 fw-semibold">Trust with confidence</h1>

          <h2 className="fs-5 fs-md-4 mt-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 fs-md-4 mt-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 fs-md-4 mt-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fs-md-4 mt-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right side - Image & Links */}
        <div className="col-12 col-md-6 px-3 py-4 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-4 mx-auto"
            style={{ maxWidth: "90%" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <a href="/products" className="text-decoration-none text-primary fw-medium">
              Explore our products
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
            <a href="/kite-demo" className="text-decoration-none text-primary fw-medium">
              Try Kite Demo
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
