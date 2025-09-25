import React from "react";

function NotFound() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-2 mb-3 fw-semibold fs-3 fs-md-2">404 Not Found</h1>
          <p className="mb-4 fs-6 fs-md-5 text-muted">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
