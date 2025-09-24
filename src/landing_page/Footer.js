import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)"}}>
      <div className="container border-top">
        <div className="row mt-5 ">
          {/* Left logo + Social */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%", marginBottom: "10px" }}
            />
            <p className="text-muted" style={{ fontSize: "12.8px" }}>
              &copy; 2010-2024, Not Zerodha Broking Ltd. <br></br>All rights reserved.
            </p>
          </div>
          <div className="col">
            <p style={{ fontSize: "18px"}}>Account</p>
            <a href="" className="footer-link">
              Open demat account
            </a>
            <br />
            <a href="" className="footer-link ">
              Minor demat account
            </a>
            <br />
            <a href="" className="footer-link ">
              NRI demat account
            </a>
            <br />
            <a href="" className="footer-link ">
              Commodity
            </a>
            <br />
            <a href="" className="footer-link ">
              Dematerialisation
            </a>
            <br />
            <a href="" className="footer-link ">
              Fund transfer
            </a>
            <br />
            <a href="" className="footer-link ">
              MTF
            </a>
            <br />
            <a href="" className="footer-link ">
              Referral program
            </a>
            <br />
          </div>
          <div className="col">
            <p style={{ fontSize: "18px"}}>Support</p>
            <a href="" className="footer-link ">
              Contact us
            </a>
            <br />
            <a href="" className="footer-link ">
              Support portal
            </a>
            <br />
            <a href="" className="footer-link ">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="footer-link ">
              Status of your complaints
            </a>
            <br />
            <a href="" className="footer-link ">
              Bulletin
            </a>
            <br />
            <a href="" className="footer-link ">
              Circular
            </a>
            <br />
            <a href="" className="footer-link ">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="footer-link ">
              Downloads
            </a>
            <br />
          </div>
          <div className="col">
            <p style={{ fontSize: "18px"}}>Company</p>
            <a href="" className="footer-link ">
              About
            </a>
            <br />
            <a href="" className="footer-link ">
              Philosophy
            </a>
            <br />
            <a href="" className="footer-link ">
              Press & media
            </a>
            <br />
            <a href="" className="footer-link ">
              Careers
            </a>
            <br />
            <a href="" className="footer-link ">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a href="" className="footer-link ">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="footer-link ">
              Open source
            </a>
            <br />
          </div>
          <div className="col">
            <p style={{ fontSize: "18px"}}>Quick links</p>
            <a href="" className="footer-link ">
              Upcoming IPOs
            </a>
            <br />
            <a href="" className="footer-link ">
              Brokerage charges
            </a>
            <br />
            <a href="" className="footer-link ">
              Market holidays
            </a>
            <br />
            <a href="" className="footer-link ">
              Economic calendar
            </a>
            <br />
            <a href="" className="footer-link ">
              Calculators
            </a>
            <br />
            <a href="" className="footer-link ">
              Markets
            </a>
            <br />
            <a href="" className="footer-link ">
              Sectors
            </a>
            <br />
          </div>
          <br />
          <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              <a href="#" className="ticket-link"> complaints@zerodha.com,</a> for DP related to <a href="#" className="ticket-link">dp@zerodha.com.</a> Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF{" "}
            </p>

            <p>
              Procedure to file a complaint on <a href="https://scores.sebi.gov.in/" className="ticket-link">SEBI SCORES:</a> Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a href="#" className="ticket-link">Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}</a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE.<a href="#" className="ticket-link"> NSE broker
              factsheet{" "}</a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please{" "}
              <a href="#" className="ticket-link">
                create a ticket here.
              </a>
            </p>
          </div>
        </div>{" "}
        {/* row close */}
      </div>
      {/* 🔹 Last strip section */}
      <div className=" mt-4 mb-4 pt-3">
        <div className="container text-center">
          <ul className="list-inline mb-0" style={{ fontSize: "14px" }}>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                NSE
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                BSE
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                MCX
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                Terms & conditions
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                Policies & procedures
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                Privacy policy
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                Disclosure
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                For investor's attention
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#" className="footer-link">
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
