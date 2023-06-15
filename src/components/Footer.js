import React from "react";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-img">
        <img src="./assets/footer-img.png" alt="" />
      </div>
      <div className="footer-content">
        <div className="footer-social">
          <ul>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </ul>
        </div>
        <div className="footer-terms">
          <ul>
            <li>Mentions légales</li>
            <li>Conditions générales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
