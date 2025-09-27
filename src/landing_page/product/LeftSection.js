import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="d-flex flex-wrap gap-3">
            <a href={tryDemo}>Try demo<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
            <a href={learnMore}>Learn more<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
          </div>

          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                className="img-fluid"
                alt="App Store"
                style={{ marginleft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
