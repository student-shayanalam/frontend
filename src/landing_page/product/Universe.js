import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const platforms = [
    {
      img: "media/images/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "media/images/sensibullLogo.svg",
      text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "media/images/tijori.svg",
      text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: "media/images/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: "media/images/dittoLogo.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container mt-5 mb-5 p-3 p-md-5">
      <div className="text-center">
        <h1 className="fs-4">The Zerodha Universe</h1>
        <p className="text-muted mx-5 mt-3" style={{ fontSize: "16px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row justify-content-center mt-4 p-5">
        {platforms.map((item, index) => (
          <div key={index} className="col-12 col-md-4 p-4 text-center">
            <img src={item.img} alt="logo" style={{ width: "150px" }} />
            <p className="text-muted mt-3 fs-6">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
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
  );
}

export default Universe;
