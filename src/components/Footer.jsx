import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Left */}
        <div className="footer-section">
          <h3>FOS Delivery</h3>
          <p>Fast & fresh food </p>
        </div>

        {/* Center */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Food">Menu</a></li>
            <li><a href="/Cart">Cart</a></li>
            <li><a href="/Checkout">Checkout</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@fosdelivery.com</p>
          <p>Phone: +63 912 345 6789</p>
          <div className="footer-socials">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FOS Delivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
