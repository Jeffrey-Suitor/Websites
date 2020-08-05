import React from "react";
import "./NavBar.css";
import email from "../../assets/icons/email_white.svg";
import facebook from "../../assets/icons/facebook_white.svg";
import instagram from "../../assets/icons/instagram_white.svg";
import linkedin from "../../assets/icons/linkedin_white.svg";
import twitter from "../../assets/icons/twitter_white.svg";

export default function NavBar() {
  
  function toggle_menu() {
    let toggle_menu = document.querySelector(".navbar-togmenubtn");
    let menu = document.querySelector(".navbar-menu");
    toggle_menu.classList.toggle("active");
    menu.classList.toggle("open");
  }

  return (
    <nav className="navbar">
      <button className="navbar-togmenubtn" onClick={toggle_menu}>
        <span />
      </button>
      <div className="navbar-menu">
        <nav className="navbar-menu-main">
              <a href="#home-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Home
              </a>
              <a href="#gh-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Guided Hands&trade;
              </a>
              <a href="#about-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                About
              </a>
              <a href="#achievements-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Achievements
              </a>
              <a href="#collaborators-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Collaborators
              </a>
              <a href="#contact-us-anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Contact Us
              </a>
        </nav>
        <footer className="navbar-menu-footer">
          <a
            href="https://www.facebook.com/ImaginAbleSolutions"
            id="facebook_container"
          >
            <img
              src={facebook}
              id="facebook"
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/imaginable-solutions"
            id="linkedin_container"
          >
            <img
              src={linkedin}
              id="linked"
              alt="LinkedIn Icon"
            />
          </a>

          <a href="https://twitter.com/ImaginAbleSlns" id="twitter_container">
            <img
              src={twitter}
              id="twitter"
              alt="Twitter Icon"
              style={{ fill: "#fff" }}
            />
          </a>

          <a
            href="https://www.instagram.com/imaginable.solutions"
            id="instagram_container"
          >
            <img
              src={instagram}
              id="instagram"
              alt="Instagram Icon"
            />
          </a>

          <a
            href="mailto:info@imaginablesolutions.ca"
            id="email_container"
          >
            <img
              src={email}
              id="email"
              alt="Email Icon"
            />
          </a>
        </footer>
      </div>
    </nav>
  );
}
