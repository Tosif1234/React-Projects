import React from "react";
import { Truck, Award, RefreshCcw, Headphones, Facebook, Instagram, Twitter, Linkedin, Gamepad2, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* FontAwesome for Brand Icons (Discord, Paypal etc if needed) - Using Lucide for now for consistency */}

      <style>{`
        .footer-section {
          font-family: 'DM Sans', sans-serif;
          background-color: #fff;
          color: #777;
          padding-top: 60px;
        }

        /* --- Service Info Bar (Top) --- */
        .service-bar {
          padding-bottom: 60px;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .service-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .service-icon {
            min-width: 50px;
            height: 50px;
            border-radius: 50%; /* Optional: or simple styling */
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3577f0; /* The blue color */
            background: transparent;
        }
        
        .service-icon img {
            width: 40px; 
            height: 40px;
        }

        .service-content h6 {
            font-weight: 700;
            color: #292930;
            margin-bottom: 4px;
            font-size: 16px;
        }
        
        .service-content p {
            font-size: 14px;
            margin: 0;
            color: #777;
        }

        /* --- Main Footer Links --- */
        .footer-main {
            padding: 60px 0;
        }

        .footer-heading {
            font-weight: 700;
            color: #292930;
            font-size: 18px;
            margin-bottom: 25px;
        }

        .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-links li {
            margin-bottom: 14px;
        }
        
        .footer-links a {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: #777;
            font-size: 15px;
            transition: 0.3s;
        }
        .footer-links a:hover {
            color: #292930;
        }
        .footer-links a:hover:after {
            width: 100%;
            opacity: 1;
            left: 0;
        }
        .footer-links a:after{
            content:"";
            height: 2px;
            width: 0;
            background-color: #292930;
            position: absolute;
            bottom: -2px;
            right: 0;
            opacity: 0;
            transition: .5s;
        }

        .support-info li {
            font-size: 15px;
            margin-bottom: 15px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }
        
        /* --- Download App Section --- */
        .app-download-area {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-top: 15px;
        }
        
        .qr-code {
            width: 80px;
            height: 80px;
            border: 1px solid #eee;
            padding: 5px;
            border-radius: 5px;
        }
        
        .store-btns {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .store-btn-img {
            height: 35px;
            width: auto;
            cursor: pointer;
        }

        /* --- Bottom Copyright Bar --- */
        .copyright-bar {
            border-top: 1px solid #f0f0f0;
            padding: 30px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .social-icons {
            display: flex;
            gap: 20px;
        }
        
        .social-link {
            color: #777;
            transition: 0.3s;
        }
        .social-link:hover {
            color: #292930;
        }

        .payment-icons {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .payment-img {
            height: 20px;
            width: auto;
        }

        /* Responsive Tweaks */
        @media (max-width: 991px) {
            .service-item { margin-bottom: 30px; }
            .copyright-bar { flex-direction: column; text-align: center; }
        }

      `}</style>

      <footer className="footer-section">
        <div className="container">
          
          {/* --- TOP SERVICE BAR --- */}
          <div className="service-bar">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><Truck size={40} strokeWidth={1.2} /></div>
                        <div className="service-content">
                            <h6>Fast & Secure Delivery</h6>
                            <p>Tell about your service.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><Award size={40} strokeWidth={1.2} /></div>
                        <div className="service-content">
                            <h6>Money Back Guarantee</h6>
                            <p>Within 10 days.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><RefreshCcw size={40} strokeWidth={1.2} /></div>
                        <div className="service-content">
                            <h6>24 Hour Return Policy</h6>
                            <p>No question ask.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-item">
                        <div className="service-icon"><Headphones size={40} strokeWidth={1.2} /></div>
                        <div className="service-content">
                            <h6>Pro Quality Support</h6>
                            <p>24/7 Live support.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* --- MAIN LINKS AREA --- */}
          <div className="footer-main">
            <div className="row g-4">
                
                {/* Column 1: Support */}
                <div className="col-lg-3 col-md-6">
                    <h5 className="footer-heading">Support</h5>
                    <ul className="footer-links support-info">
                        <li>
                            685 Market Street, <br/>
                            Las Vegas, LA 95820, <br/>
                            United States.
                        </li>
                        <li>
                            <a href="mailto:example@domain.com">example@domain.com</a>
                        </li>
                        <li>
                            <a href="tel:018503155862">(+01) 850-315-5862</a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Account */}
                <div className="col-lg-3 col-md-6">
                    <h5 className="footer-heading">Account</h5>
                    <ul className="footer-links">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                {/* Column 3: Quick Link */}
                <div className="col-lg-3 col-md-6">
                    <h5 className="footer-heading">Quick Link</h5>
                    <ul className="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Column 4: Download App */}
                <div className="col-lg-3 col-md-6">
                    <h5 className="footer-heading">Download App</h5>
                    <p style={{fontSize: '14px', marginBottom: '15px'}}>Save $3 With App & New User only</p>
                    
                    <div className="app-download-area">
                        {/* Placeholder QR Code */}
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                            alt="QR" 
                            className="qr-code" 
                        />
                        <div className="store-btns">
                            {/* App Store Buttons Placeholders */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-btn-img" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-btn-img" />
                        </div>
                    </div>
                </div>

            </div>
          </div>

          {/* --- COPYRIGHT BAR --- */}
          <div className="copyright-bar">
            
            {/* Socials */}
            <div className="social-icons">
                <a href="#" className="social-link"><Facebook size={20} /></a>
                <a href="#" className="social-link"><Instagram size={20} /></a>
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Gamepad2 size={20} /></a> {/* Discord Placeholder */}
            </div>

            {/* Copyright Text */}
            <div className="text-center">
                © 2025. All rights reserved by Axilthemes.
            </div>

            {/* Payment Icons */}
            <div className="payment-icons">
                <span style={{fontSize:'14px', marginRight:'5px'}}>Accept For</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="payment-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="payment-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="payment-img" />
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}