import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 p-md-5" id="supportWrapper">
        <h4 className="fs-5 fs-md-4">Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-3 p-md-5 m-0 m-md-3">
        <div className="col-12 col-md-6 p-2 p-md-3">
          <h1 className="fs-5 fs-md-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input 
            className="w-100 my-2" 
            placeholder="Eg. how do I activate F&O" 
          />
          <div className="d-flex flex-wrap gap-2 mt-3">
            <a href="#" className="text-nowrap">Track account opening</a>
            <a href="#" className="text-nowrap">Track segment activation</a>
            <a href="#" className="text-nowrap">Intraday margins</a>
            <a href="#" className="text-nowrap">Kite user manual</a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-2 p-md-3 mt-3 mt-md-0">
          <h1 className="fs-5 fs-md-3">Featured</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;