import React from "react";

function Footer() {
  return (
    <footer className="bg-[rgb(250,250,250)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 border-t">
        {/* Top Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo + Copyright */}
          <div>
            <img
              src="./public/media/logo.svg"
              alt="Logo"
              className="w-40 mb-4"
            />
            <p className="text-sm text-gray-600">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 font-medium text-gray-900">Company</p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Referral programme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Zerodha cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="mb-4 font-medium text-gray-900">Support</p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  List of charges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <p className="mb-4 font-medium text-gray-900">Account</p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Open an account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal / Disclaimer */}
        <div className="mt-12 pb-12 text-gray-500 text-sm space-y-4">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors..."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
