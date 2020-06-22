import React from "react";
import "./AchievementComponent.css";
import PropTypes from "prop-types";

export default function AchievementComponent(props) {
  return (
    <div className="achievement">
      <a href={props.link} className="achievement-link">
        <div className="achievement-logo-container">
          <img src={props.logo} alt={props.alt_img_text} id="achievement-logo" />
        </div>
        <div className="achievement-date">{props.date}</div>
        <div className="achievement-place">{props.place}</div>
        <div className="achievement-body">{props.body}</div>
      </a>
    </div>
  );
}

AchievementComponent.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt_img_text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
};
