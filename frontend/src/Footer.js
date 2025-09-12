import React from 'react';
import { FaPhone } from "react-icons/fa"; 

function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5">
        {/* Column 1 */}
        <div className="col">
          <img src="media/logo.svg" alt="avinish" style={{ width: "50%" }} />
          <p className="mt-3">&copy; 2010-2014 Not Zerodha Broking</p>
          <div className="flex gap-4 text-2xl text-blue-600 mx-2">
            <i className="fa-brands fa-facebook hover:text-blue-800 fs-5 "></i>
            <i className="fa-brands fa-facebook-messenger hover:text-blue-500 mx-2 fs-5"></i>
            <i className="fa-brands fa-facebook-f hover:text-blue-700 mx-2 fs-5"></i>
            <i className="fa-brands fa-thumbs-up hover:text-green-500 mx-2 fs-5"></i>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col">
          <p>Company</p>
          <a href="/" className="phone">About</a><br />
          <a href="/">Support</a><br />
          <a href="/">Pricing</a><br />
          <a href="/">Trust and Quality</a><br />
          <a href="/">Good Environment</a><br />
          <a href="/">Good Leader</a><br />
          <a
            href="tel:+917061666783"
            className="text-blue-600 underline hover:text-blue-800 flex items-center gap-2"
          >
            <FaPhone className="text-green-600 text-xl" /> Call Us
          </a>
        </div>

        {/* Column 3 */}
        <div className="col">
          <p>Support</p>
          <a href="/">HelpLine No: 7061666783</a><br />
          <a href="/">Customer Service 24x7</a><br />
          <a href="/">Pricing</a><br />
          <a href="/">Trust and Quality</a><br />
          <a href="/">Good Environment</a><br />
          <a href="/">Good Leader</a><br />
          <a href="/">AVINISH</a><br />
        </div>

        {/* Column 4 */}
        <div className="col">
          <p>Account</p>
          <a href="/">Open Account</a><br />
          <a href="/">Fund Transfer</a><br />
          <a href="/">60 Challenge</a><br />
        </div>
      </div>

      {/* Zerodha Info */}
      <div className="mt-3 text-muted text-sm space-y-2">
        <p>Zerodha's Products: Our technology, trading and investment platforms.</p>
        <p>Key Features:</p>
        <ul className="list-disc ml-5">
          <li>Advanced Charting: 100+ indicators and 15+ chart types.</li>
          <li>Market Depth (Level 3 Data): Insights into market liquidity.</li>
          <li>GTT Orders: Set triggers for entering or exiting stock holdings.</li>
          <li>Baskets: Create and execute multi-stock baskets.</li>
          <li>Alerts: Cloud-based alerts for stocks, futures, and options.</li>
          <li>Nudge System: Warns about potential trading risks.</li>
          <li>Option Chain: View all options contracts, prices, Greeks, and place orders.</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
