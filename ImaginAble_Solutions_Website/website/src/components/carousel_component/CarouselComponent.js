import React from "react";
import PropTypes from "prop-types";

import left_chevron from "../../assets/icons/left_chevron.svg";
import right_chevron from "../../assets/icons/right_chevron.svg";

import "./TestimonialCarouselComponent.css";
import TestimonialComponent from "../testimonials/TestimonialComponent";
import testimonials from "../../data/testimonial_data";

import "./ImageSlideshowComponent.css";
import handpiece from "../../assets/images/handpiece.png";
import guided_hands_render from "../../assets/images/guided_hands_render.png";
import guided_hands_draw from "../../assets/images/GH-Drawing.png";
import guided_hands_ipad from "../../assets/images/GH-Ipad.png";
import guided_hands_paint from "../../assets/images/GH-Paint.png";
import guided_hands_writing from "../../assets/images/GH-Writing.png";


import { Swipeable } from "react-swipeable";

const images = [
  { img: guided_hands_render, text: "Guided Hands Render" },
  { img: handpiece, text: "Handpiece Image" },
  { img: guided_hands_ipad, text: "Using an ipad on Guided Hands" },
  { img: guided_hands_paint, text: "Painting on Guided Hands" },
  { img: guided_hands_writing, text: "Writing on Guided Hands" },
  { img: guided_hands_draw, text: "Drawing on Guided Hands" },
];

export default class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      diff: 0,
    };
    this.go_next = this.go_next.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.index !== state.index) {
      return {
        index: props.active,
        diff: props.active * props.multiplier,
        length: props.length,
      };
    }
    return null;
  }

  go_next(change) {
    var index = this.state.index + change;
    index = index > this.state.length - 1 ? 0 : index;
    index = index < 0 ? this.state.length - 1 : index;
    this.props.return_func({
      active: index,
      dots: this.state.length,
    });
  }

  render() {
    if (this.props.type === "testimonial_carousel") {
      return (
        <div className="Testimonial_Carousel">
          <button id="testimonial_carousel_left" onClick={() => this.go_next(-1)}>
            <img src={left_chevron} alt="Left Chevron" />
          </button>
          <div className="testimonials_container">
            {testimonials.map((item, index) => {
              item.key = "testimonial-".concat(index.toString());
              return (
                <div
                  key={index}
                  className="testimonial"
                  style={{ transform: `translateX(${this.state.diff}%)` }}
                  onClick={() => this.go_next(0)}>
                  <Swipeable
                    onSwipedRight={() => this.go_next(1)}
                    onSwipedLeft={() => this.go_next(1)}
                    className="Swipeable">
                    <TestimonialComponent data={item}/>
                  </Swipeable>
                </div>
              );
            })}
          </div>
          <button id="testimonial_carousel_right" onClick={() => this.go_next(1)}>
            <img src={right_chevron} alt="Right Chevron" />
          </button>
        </div>
      );
    } else if (this.props.type === "image_slideshow_carousel") {
      return (
        <div className="product_carousel">
          <button id="image_carousel_left" onClick={() => this.go_next(-1)}>
            <img src={left_chevron} alt="Left Chevron" />
          </button>
          <div className="product_carousel_images">
            {images.map((item, index) => {
              return (
                <div key={index} className="product_image" style={{ transform: `translateX(${this.state.diff}%)` }}>
                  <Swipeable
                    onSwipedRight={() => this.go_next(-1)}
                    onSwipedLeft={() => this.go_next(1)}
                    className="Swipeable">
                    <img src={item.img} alt={item.text} />
                  </Swipeable>
                </div>
              );
            })}
          </div>
          <button id="image_carousel_right" onClick={() => this.go_next(1)}>
            <img src={right_chevron} alt="Right Chevron" />
          </button>
        </div>
      );
    }
  }
}

CarouselComponent.propTypes = {
  return_func: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  multiplier: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
