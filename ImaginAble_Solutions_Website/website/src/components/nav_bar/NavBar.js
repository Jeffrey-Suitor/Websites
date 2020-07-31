import React from "react";
import "./NavBar.css";
import email from "../../assets/icons/Email_White.svg";
import facebook from "../../assets/icons/Facebook_White.svg";
import instagram from "../../assets/icons/Instagram_White.svg";
import linkedin from "../../assets/icons/LinkedIn_White.svg";
import twitter from "../../assets/icons/Twitter_White.svg";

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
              <a href="#Home_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Home
              </a>
              <a href="#Guided_Hands_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Guided Hands&trade;
              </a>
              <a href="#About_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                About
              </a>
              <a href="#Achievements_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Achievements
              </a>
              <a href="#Collaborators_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
                Collaborators
              </a>
              <a href="#Contact_Us_Anchor" className="navbar-menu-main-link" onClick={toggle_menu}>
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
