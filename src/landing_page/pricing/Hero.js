import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-2">List of all charges and taxes</h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="media/images/pricingEquity.svg" style={{ width: "60%" }} alt="Free equity delivery" />
          <h1 className="fs-4 mt-3">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="media/images/intradayTrades.svg" style={{ width: "60%" }} alt="Intraday and F&O trades" />
          <h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
          <img src="media/images/pricingEquity.svg" style={{ width: "60%" }} alt="Free direct MF" />
          <h1 className="fs-4 mt-3">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
