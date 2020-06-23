import React from "react";
import "./BottomBarComponent.css";

import facebook from "../../assets/icons/Facebook_White.svg";
import instagram from "../../assets/icons/Instagram_White.svg";
import linkedin from "../../assets/icons/LinkedIn_White.svg";
import twitter from "../../assets/icons/Twitter_White.svg";

export default function BottomBarComponent() {
  return (
    <div className="bottom-bar">
      <div>
        <a href="https://www.google.com/maps/place/175+Longwood+Rd+S,+Hamilton,+ON+L8P+0A1/@43.2568101,-79.9028297,17z/data=!3m1!4b1!4m5!3m4!1s0x882c9b433e06732d:0x3e7d2474487bb55b!8m2!3d43.2568062!4d-79.900641">
          <p id="address">
            ImaginAble Solutions
            <br />
            175 Longwood Road South
            <br />
            Suite B21 Hamilton, ON,
            <br />
            Canada L8P 0A1
          </p>
        </a>

        <div id="small_email">
        <a href="mailto:info@imaginablesolutions.ca">
          <p>info@imaginablesolutions.ca</p>
        </a>
        <p id="copyright">&copy; 2020 ImaginAble Solutions</p>
        </div>
      </div>

      <div className="social-icons-container">
        <a href="https://twitter.com/ImaginAbleSlns">
          <img src={twitter} alt="Twitter Icon" className="social-icon" />
        </a>

        <a href="https://www.facebook.com/ImaginAbleSolutions">
          <img src={facebook} alt="Facebook Icon" className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/company/imaginable-solutions">
          <img src={linkedin} alt="LinkedIn Icon" className="social-icon" />
        </a>

        <a href="https://www.instagram.com/imaginable.solutions">
          <img src={instagram} alt="Instagram Icon" className="social-icon" />
        </a>
      </div>

      <div id="large_email">
      <a href="mailto:info@imaginablesolutions.ca" id="large_email">
        <p>info@imaginablesolutions.ca</p>
      </a>
      <p id="copyright">© 2020 ImaginAble Solutions</p>
      </div>
    </div>
  );
}
