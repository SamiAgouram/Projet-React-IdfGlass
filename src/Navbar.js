import React from "react";
import "./Navbar.css";
import image from "./logo-idfglass.png";

function Navbar() {
  return (

      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={image} alt="logo" />
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/">Accueil</a>
            </li>
            <li className="navbar-item">
              <a href="/services">Services</a>
            </li>
            <li className="navbar-item">
              <a href="/produits">Contact</a>
            </li>
          </ul>
          <div className="btns">
            <a className="btn-rdv" href="/contact">
              RENDEZ-VOUS
            </a>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
