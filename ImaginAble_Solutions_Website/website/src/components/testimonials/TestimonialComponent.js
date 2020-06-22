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
      <div className="card" id={props.data.key}>
        <div className="card__face card__face--front">
          <div className="testimonials">

          {props.data.img.length > 0 && (
            <img src={props.data.img} alt={props.data.alt_img_text} className="testimonials_img " />
            )}

            <div className="testimonials_body">{props.data.body}</div>

            {props.data.button.length > 0 && (
                <button onClick={flipCard} className="testimonials_button">{props.data.button}</button>
            )}

            <div className="testimonials_about">{props.data.about}</div>
          </div>
        </div>

        {props.data.button.length > 0 && (
          <div className="card__face card__face--back">
            <div className="testimonials_hear_more">{props.data.hear_more}</div>
            <button id="testimonials_button_return" onClick={flipCard}>
              Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
