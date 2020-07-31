import React from "react";
import "./TestimonialComponent.css";

export default function TestimonialComponent(props) {
  const flipCard = () => {
    var card = document.getElementById(props.data.key);
    console.log(props.data);
    card.classList.toggle("is-flipped");
  };

  return (
    <div className="scene">
      <div className="testimonial" id={props.data.key}>
        <div className="testimonial-face">
          <div className="testimonial-front-container">

          {props.data.img.length > 0 && (
            <img src={props.data.img} alt={props.data.alt_img_text} className="testimonial-front-img " />
            )}

            <div className="testimonial-front-body">{props.data.body}</div>

            {props.data.button.length > 0 && (
                <button onClick={flipCard}>{props.data.button}</button>
            )}

            <div className="testimonial-front-about">{props.data.about}</div>
          </div>
        </div>

        {props.data.button.length > 0 && (
          <div className="testimonial-face testimonial-back">
            <div className="testimonial-back-hearmore">{props.data.hear_more}</div>
            <button id="testimonial-back-returnbtn" onClick={flipCard}>
              Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
