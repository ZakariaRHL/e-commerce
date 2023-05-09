import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <h2>E-commerce Web APP</h2>
        </div>
        <div className="footer-sections">
          <div className="section">
            <h4>About Us</h4>
            <a href="#">Our Story</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
          </div>
          <div className="section">
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">Returns</a>
          </div>
          <div className="section">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="section">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
