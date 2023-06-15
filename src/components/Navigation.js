import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-content">
        <h1>CRYPTO</h1>
        <div className="nav-menu">
          <ul>
            <Link to="#Accueil" smooth>
              <li>Accueil</li>
            </Link>
            <li>Marché</li>
            <Link to="#Services" smooth>
              <li>Services</li>
            </Link>
            <Link to="#Contact" smooth>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="nav-social">
          <ul>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
