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

import guided_hands_image from "./assets/images/GuidedHands.jpg";
import guided_hands_image_web from "./assets/images/guided_hands_new.png";
import Tablet from "./assets/icons/Tablet.svg";
import Paint from "./assets/icons/Paint.svg";
import Write from "./assets/icons/Write.svg";
import Draw from "./assets/icons/Draw.svg";
import lianna from "./assets/images/Lianna_Profile.png";
import heart_handshake from "./assets/icons/heart-handshake.svg";
import imaginable_logo from "./assets/icons/imaginable-logo-short.jpg";

import mmri from "./assets/images/MMRI.png";
import forge from "./assets/images/The Forge.jpg";
import maceng from "./assets/images/McMaster Engineering.png";
import innovation_factory from "./assets/images/innovation_factory.png";
import ibiomed from "./assets/images/iBioMed.jpg";
import hhs from "./assets/images/Hamilton Health Sciences.jpg";
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
      testimonials: 5,
      testimonials_multiplier: -100,
      total_testimonials: 5,

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
      <div className="Main">
        <NavBar />
        <div className="Logo">
          <span className="anchor" id="Home_Anchor"></span>
          <div className="Logo_Large_Lettering">ImaginAble</div>
          <div className="Logo_Small_Lettering">Solutions Inc.</div>
        </div>

        <video autoPlay muted controls className="Video">
          <source src={guided_hands_video} type="video/mp4" />
        </video>

        <div className="landing-text">
          <h1 id="draw_again">"I can draw again!"</h1>
          <p>
            <b>Guided Hands&trade;</b> is an assistive device that enables people with limited fine motor skills to
            write, draw, and paint as well as type and scroll on a tablet or a computer.
            <br />
            <a id="Contact_Us_Landing" href="#Contact_Us_Anchor">
              Contact us
            </a>
          </p>
        </div>

        <img
          src={guided_hands_image_web}
          alt="Guided Hands Product"
          className="Guided_Hands_Product_Image"
          id="Guided_Hands_Product_Image_Web"
        />

        <div className="Mission">
          <h1 className="Mission_Header">Our Mission</h1>

          <div className="Mission-content">
            <img className="mission-icon" src={imaginable_logo} alt="ImaginAble logo" />

            <p className="Mission_Text">
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

        <div className="Guided_Hands">
          <span className="anchor" id="Guided_Hands_Anchor"></span>
          <h1 id="Guided_Hands">Guided Hands&trade;</h1>

          <img
            src={guided_hands_image}
            alt="Guided Hands Product"
            className="Guided_Hands_Product_Image"
            id="Guided_Hands_Product_Image_Mobile"
          />

          <p id="Guided_Hands_Product_Text">
            Guided Hands&trade; is an assistive device that enables people with limited fine motor skills to write,
            draw, and paint as well as type and scroll on a tablet or a computer.
          </p>

          <div className="Guided_Hands_Product_Help_You_Icons">
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
              id="Product_Image_Dots"
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

        <div className="Testimonials">
          <span className="anchor" id="Testimonials_Anchor" />

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
            id="testimonials-dots"
          />
        </div>

        <div className="About">
          <span className="anchor" id="About_Anchor"></span>
          <h1>About</h1>
          <div className="Lianna_Image_Container">
            <img src={lianna} alt="Lianna" id="Lianna_Image" />
            <div className="Lianna_Text_Container">
              <h1 id="Lianna_Title_Text">Lianna Genovese</h1>
              <h4>CEO &amp; Founder</h4>
              <p id="Program_Text">
                Biomedical &amp; Mechanical Engineering Grad 2022
                <br />
                McMaster University
              </p>

              <button id="Our_Story_Button" onClick={this.show_modal}>
                Lianna's Story
              </button>
              <ModalComponent
                onClose={this.show_modal}
                modal={this.state.modal}
                title="Lianna's Story"
                content={our_story.our_story}
              />
            </div>
            <div className="abstract">
              <div />
            </div>
          </div>
        </div>

        <div className="Achievements">
          <span className="anchor" id="Achievements_Anchor"></span>
          <h1>Achievements</h1>
          <AchievementComponentContainer />
        </div>

        <div className="collaborators">
          <span className="anchor" id="Collaborators_Anchor"></span>
          <h1>Collaborators</h1>
          <div className="collaborators-image-container">
            {/*
            <a href="https://dystoniacanada.org/">
              <img
                src={dystonia_foundation}
                alt="Dystonia Medical Research Foundation"
                className="collaborators-image"
              />
            </a>
            */}
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

        <div className="Contact_Us">
          <span className="anchor" id="Contact_Us_Anchor"></span>
          <h1>Contact Us</h1>
          <ContactComponent />
          <BottomBar />
        </div>
      </div>
    );
  }
}
