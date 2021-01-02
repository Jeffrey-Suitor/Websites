import React from "react";
import "./ContactComponent.css";

/* TODO: ADD LIANNAS EMAIL */

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone_number: "",
      email: "",
      message: "",
      email_subscription: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubscriptionChange = this.onSubscriptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let button = document.querySelector(".contact-progress-button");
    let button_loading = document.querySelector(".contact-progress-button.loading");

    let progressEl = new SVGEl(document.querySelector("svg.progress-circle"));
    let successEl = new SVGEl(document.querySelector("svg.checkmark"));
    let errorEl = new SVGEl(document.querySelector("svg.cross"));

    if (button_loading !== null) {
      return;
    }

    fetch("/contactus", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("success");
          button.classList.replace("loading", "success");
          progressEl.draw(0);
          successEl.draw(1);
          this.resetForm();
        } else if (response.status === "fail") {
          button.classList.replace("loading", "error");
          progressEl.draw(0);
          errorEl.draw(1);
        }
      });

    button.classList.toggle("loading");
    progressEl.draw(1);

    setTimeout(function () {
      button.classList.remove("loading", "success", "error");
      progressEl.draw(0);
      errorEl.draw(0);
      successEl.draw(0);
    }, 4000);
  }

  resetForm() {
    if (this.state.email_subscription) {
      this.onSubscriptionChange();
    }
    this.setState({ name: "", phone_number: "", email: "", message: "", email_subscription: false });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onPhoneChange(event) {
    this.setState({ phone_number: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onSubscriptionChange() {
    let subscription = document.querySelector(".subscription");
    let status = !this.state.email_subscription;

    if (status) {
      subscription.classList.add("subscription-active");
    } else {
      subscription.classList.remove("subscription-active");
    }
    this.setState({ email_subscription: status });
  }

  render() {
    return (
      <div className="contact">
        <form className="contact-form" onSubmit={this.handleSubmit} method="POST">
          <input
            type="text"
            className="contact-form-control"
            id="name"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Name"
            required
          />

          <input
            type="tel"
            className="contact-form-control"
            id="phone"
            aria-describedby="phone_field"
            value={this.state.phone_number}
            onChange={this.onPhoneChange}
            placeholder="Phone Number"
          />

          <input
            type="email"
            className="contact-form-control"
            id="email"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.onEmailChange}
            placeholder="Email"
            required
          />

          <textarea
            className="contact-form-control"
            rows="5"
            id="message"
            value={this.state.message}
            onChange={this.onMessageChange}
            placeholder="Message"
            required
          />

          <input
            type="checkbox"
            value={this.state.email_subscription}
            onChange={this.onSubscriptionChange}
            id="subscription-checkbox"
          />
          <label htmlFor="subscription-checkbox" className="subscription contact-form-control">
            Subscribe to our newsletter
          </label>

          <div className="contact-progress-button">
            <button type="submit" className="contact-progress-button-submit">
              Submit
            </button>
            <svg className="progress-circle" width="70" height="70">
              <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
            </svg>
            <svg className="checkmark" width="70" height="70">
              <path d="m31.5,46.5l15.3,-23.2" />
              <path d="m31.5,46.5l-8.5,-7.1" />
            </svg>
            <svg className="cross" width="70" height="70">
              <path d="m35,35l-9.3,-9.3" />
              <path d="m35,35l9.3,9.3" />
              <path d="m35,35l-9.3,9.3" />
              <path d="m35,35l9.3,-9.3" />
            </svg>
          </div>
        </form>

        <a href="https://forms.gle/ozv4tSYMWrTcK7z77">
          <button className="contact-order-now">Pre-Order now</button>
        </a>
      </div>
    );
  }
}

function SVGEl(el) {
  this.el = el;
  // the path elements
  this.paths = [].slice.call(this.el.querySelectorAll("path"));
  // we will save both paths and its lengths in arrays
  this.pathsArr = [];
  this.lengthsArr = [];
  this._init();
}

SVGEl.prototype._init = function () {
  var self = this;
  this.paths.forEach(function (path, i) {
    self.pathsArr[i] = path;
    path.style.strokeDasharray = self.lengthsArr[i] = path.getTotalLength();
  });
  // undraw stroke
  this.draw(0);
};

// val in [0,1] : 0 - no stroke is visible, 1 - stroke is visible
SVGEl.prototype.draw = function (val) {
  for (var i = 0, len = this.pathsArr.length; i < len; ++i) {
    this.pathsArr[i].style.strokeDashoffset = this.lengthsArr[i] * (1 - val);
  }
};
