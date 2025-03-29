import React from 'react';
import logo from '../../assets/img/footerLogo.png'
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} className="footer-logo" alt="Logo" />
          <p className="footer-description">
            NIMS College was established in 2007. Over a decade of successful run it is now one of the popular College of Management.
            In 2018 the College was in the hands of new academic team of some highly reputed professionals in different fields of
            research and education area.          </p>
        </div>

        <div className="footer-company-section">
          <p className="footer-section-title">USEFUL LINKS</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <p className="footer-section-title">GET IN TOUCH</p>
          <ul className="footer-list">
            <li> 01-5438017</li>
            <li>nimscollege75@gmail.com
            </li>
            <li> Kumaripati, Lalitpur</li>
          </ul>


        </div>

      </div>

      <div className="footer-copyright">
        <hr />
        <p className="copyright-text">Copyright {currentYear} @ NIMS College - All Rights Reserved | Designed and Developed by Sachin Sunar.</p>
      </div>
    </div>
  );
};

export default Footer;