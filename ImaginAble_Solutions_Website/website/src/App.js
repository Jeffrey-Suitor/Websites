import React from "react";
import "./App.css";
import ReactGA from "react-ga";

import AchievementComponentContainer from "./components/achievements/AchievementComponentContainer";
import CarouselComponent from "./components/carousel_component/CarouselComponent";
import PaginationDotsComponent from "./components/pagination_dots_component/PaginationDotsComponent";
import ContactComponent from "./components/contact_component/ContactComponent";
import ModalComponent from "./components/modal_component/ModalComponent";
import NavBar from "./components/nav_bar/NavBar";
import BottomBar from "./components/bottom_bar_component/BottomBarComponent";
import UsageIconComponent from "./components/usage_icon_component/usageIconComponent";

import guided_hands_video from "./assets/video/guided_hands.mp4";

import guided_hands_image from "./assets/images/guided_hands.jpg";
import guided_hands_image_web from "./assets/images/guided_hands_render_hand.png";
import Tablet from "./assets/icons/tablet.svg";
import Paint from "./assets/icons/paint.svg";
import Write from "./assets/icons/write.svg";
import Draw from "./assets/icons/draw.svg";
import lianna from "./assets/images/lianna_profile.png";
import heart_handshake from "./assets/icons/heart_handshake.svg";
import imaginable_logo from "./assets/icons/imaginable_logo_short.jpg";

import mmri from "./assets/images/mmri.png";
import forge from "./assets/images/the_forge_large_logo.jpg";
import maceng from "./assets/images/mcmaster_engineering.png";
import innovation_factory from "./assets/images/innovation_factory.png";
import ibiomed from "./assets/images/ibiomed.jpg";
import hhs from "./assets/images/hamilton_health_sciences.jpg";
import dystonia_foundation from "./assets/images/dystonia_foundation.png";
import medt from "./assets/images/medt.png";

import our_story from "./data/our_story";

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.testimonial_carousel_change = this.testimonial_carousel_change.bind(this);
    this.product_image_carousel_change = this.product_image_carousel_change.bind(this);
    this.show_modal = this.show_modal.bind(this);
    this.handleResize = debounce(this.handleResize.bind(this), 50);
    this.state = {
      current_testimonial: 0,
      testimonials: 6,
      testimonials_multiplier: -100,
      total_testimonials: 6,

      current_product_image: 0,
      product_images: 6,
      product_images_multiplier: -100,

      modal: false,
    };
  }

  componentDidMount() {
    ReactGA.initialize("UA-169921725-1");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  handleResize() {
    this.setState({
      testimonials:
        window.innerWidth > 1200 ? Math.ceil(this.state.total_testimonials / 2) : this.state.total_testimonials,
      testimonials_multiplier: window.innerWidth > 1200 ? -200 : -100,
      current_testimonial: window.innerWidth > 1200 ? 0 : this.state.current_testimonial,
    });
  }

  show_modal() {
    this.setState({ modal: !this.state.modal });
  }

  testimonial_carousel_change(result) {
    this.setState({
      current_testimonial: result.active,
      testimonials: result.dots,
    });
  }

  product_image_carousel_change(result) {
    this.setState({
      current_product_image: result.active,
      product_images: result.dots,
    });
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="logo">
          <span className="anchor" id="home-anchor"></span>
          <div className="logo-large-lettering">ImaginAble</div>
          <div className="logo-small-lettering">Solutions Inc.</div>
        </div>

        <video autoPlay muted controls className="video">
          <source src={guided_hands_video} type="video/mp4" />
        </video>

        <div className="landing-text">
          <h1 id="landing-text-header">"I can draw again!"</h1>
          <p>
            <b>Guided Hands&trade;</b> is an assistive device that enables people with limited fine motor skills to
            write, draw, and paint as well as type and scroll on a tablet or a computer.
            <br />
            <a id="landing-text-contact" href="#contact-us-anchor">
              Contact us
            </a>
          </p>
        </div>

        <img src={guided_hands_image_web} alt="Guided Hands Product" id="gh-product-image-web" />

        <div className="mission">
          <h1 className="mission-header">Our Mission</h1>

          <div className="mission-content">
            <img className="mission-icon" src={imaginable_logo} alt="ImaginAble logo" />
            <p>
              ImaginAble Solutions creates assistive devices for people living with impaired motor function to improve
              their quality of life during everyday activities.
              <br />
            </p>
            <img className="mission-icon" src={heart_handshake} alt="Heart handshake" />
            <p>
              Our mission is to provide our customers with the freedom and independence to live the life they had always
              imagined.
            </p>
          </div>
        </div>

        <div className="guided-hands">
          <span className="anchor" id="gh-anchor"></span>
          <h1 id="guided-hands-title">Guided Hands&trade;</h1>

          <img src={guided_hands_image} alt="Guided Hands Product" id="gh-product-image-mobile" />

          <p id="gh-product-text">
            Guided Hands&trade; is an assistive device that enables people with limited fine motor skills to write,
            draw, and paint as well as type and scroll on a tablet or a computer.
          </p>

          <div className="gh-product-use-icons">
            <UsageIconComponent img={Paint} alt="Paintbrush" text="Paint" />
            <UsageIconComponent img={Write} alt="Pencil" text="Write" />
            <UsageIconComponent img={Draw} alt="Tablet" text="Draw" />
            <UsageIconComponent img={Tablet} alt="Tablet" text="Touch" />
          </div>

          <div className="features">
            <h1 id="features-header">Features</h1>
            <ul className="guided-hands-list features-list">
              <li>Multipurpose and compatible with pens, paintbrushes, markers, stylus and more</li>
              <li>Enables controlled and guided hand movements</li>
              <li>Some report decreased hand fatigue and pain</li>
              <li>Choice of 3 ambidextrous handpieces corresponding to level of hand impairment</li>
              <li>Adjustable wrist rest</li>
            </ul>
          </div>

          <div className="guided-hands-product-image-slideshow">
            <CarouselComponent
              return_func={this.product_image_carousel_change}
              active={this.state.current_product_image}
              type="image_slideshow_carousel"
              length={this.state.product_images}
              multiplier={this.state.product_images_multiplier}
            />
            <PaginationDotsComponent
              num_dots={this.state.product_images}
              active={this.state.current_product_image}
              changeActive={this.product_image_carousel_change}
            />
          </div>

          <div className="guided-hands-conditions">
            <p className="guided-hands-conditions-text">
              Guided Hands&trade; helps people living with or recovering from:
            </p>
            <ul className="guided-hands-list" id="guided-hands-conditions-list">
              <li>Cerebral Palsy</li>
              <li>Dystonia</li>
              <li>Arthritis</li>
              <li>Huntington's Disease</li>
              <li>ALS</li>
              <li>Spinal Cord Injuries</li>
              <li>Strokes</li>
              <li>And more</li>
            </ul>
          </div>
        </div>

        <div className="testimonials">
          <h1 id="testimonials-header">Testimonials</h1>
          <CarouselComponent
            return_func={this.testimonial_carousel_change}
            active={this.state.current_testimonial}
            type="testimonial_carousel"
            length={this.state.testimonials}
            multiplier={this.state.testimonials_multiplier}
          />

          <PaginationDotsComponent
            num_dots={this.state.testimonials}
            active={this.state.current_testimonial}
            changeActive={this.testimonial_carousel_change}
          />
        </div>

        <div className="about">
          <span className="anchor" id="about-anchor"></span>
          <h1>About</h1>
          <div className="about-image-container">
            <img src={lianna} alt="Lianna" id="about-image" />
            <div className="about-text-container">
              <h1 id="about-text-name">Lianna Genovese</h1>
              <h4>CEO &amp; Founder</h4>
              <p id="about-text-program">
                Biomedical &amp; Mechanical Engineering
                <br />
                McMaster University
              </p>

              <button id="our-story-button" onClick={this.show_modal}>
                Lianna's Story
              </button>
              <ModalComponent
                onClose={this.show_modal}
                modal={this.state.modal}
                title="Lianna's Story"
                content={our_story.our_story}
              />
            </div>
            <div className="about-abstract-shape">
              <div />
            </div>
          </div>
        </div>

        <div className="achievements">
          <span className="anchor" id="achievements-anchor"></span>
          <h1>Achievements</h1>
          <AchievementComponentContainer />
        </div>

        <div className="collaborators">
          <span className="anchor" id="collaborators-anchor"></span>
          <h1>Collaborators</h1>
          <div className="collaborators-image-container">
            <a href="https://dystoniacanada.org/">
              <img src={dystonia_foundation} alt="Dystonia Medical Research Foundation" className="collaborators-image"/>
            </a>
            <a href="https://www.eng.mcmaster.ca/mcmaster-manufacturing-research-institute-mmri">
              <img src={mmri} alt="McMaster Manufacturing Research Institute" className="collaborators-image" />
            </a>
            <a href="https://www.hamiltonhealthsciences.ca/">
              <img src={hhs} alt="Hamilton Health Sciences" className="collaborators-image" />
            </a>
            <a href="https://theforge.mcmaster.ca/">
              <img src={forge} alt="The Forge" className="collaborators-image" />
            </a>
            <a href="https://innovationfactory.ca/">
              <img src={innovation_factory} alt="Innovation Factory" className="collaborators-image" />
            </a>
            <a href="https://www.eng.mcmaster.ca/">
              <img src={maceng} alt="McMaster Engineering" className="collaborators-image" />
            </a>
            <a href="https://www.eng.mcmaster.ca/ibiomed">
              <img src={ibiomed} alt="McMaster IBioMed" className="collaborators-image" />
            </a>
            <a href="https://www.macmedt.com/">
              <img src={medt} alt="McMaster Medical Design Team" className="collaborators-image" />
            </a>
          </div>
        </div>

        <div className="contact-us">
          <span className="anchor" id="contact-us-anchor"></span>
          <h1>Contact Us</h1>
          <ContactComponent />
          <BottomBar />
        </div>
      </div>
    );
  }
}
