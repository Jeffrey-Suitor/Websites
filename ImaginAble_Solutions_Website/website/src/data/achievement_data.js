import React from "react";
import enactus from "../assets/images/enactus.png";
import forge from "../assets/images/forge.jpg";
import innovation_nation from "../assets/images/innovation_nation.png";
import synapse from "../assets/images/synapse.png";
import universitas from "../assets/images/Universitas21.jpg";
import mmri from "../assets/images/MMRI.png";
import innovation_factory from "../assets/images/innovation_factory.png";
import idea from "../assets/images/idea.jpg";

const achievements = [
  {
    logo: enactus,
    link:
      "http://enactus.ca/twelve-student-entrepreneur-finalists-will-compete-for-10000/",
    alt_img_text: "Enactus logo",
    date: "April 2020",
    place: <h3>Finalist</h3>,
    body: "Enactus Student Entrepreneur National Competition",
  },

  {
    logo: forge,
    link:
      "https://theforge.mcmaster.ca/index.php/for-students/imaginable-solutions/",
    alt_img_text: "Forge logo",
    date: "March 2020",
    place: (
      <h3>
        2<sup>nd</sup> Place
      </h3>
    ),

    body: "The Forge $100k Student Startup Competition ",
  },
  {
    logo: innovation_nation,
    link: "http://innovation-nation.ca/",
    alt_img_text: "Innovation Nation logo",
    date: "January 2020",
    place: <h3>Best Innovation</h3>,
    body: "Innovation Nation Conference ",
  },

  {
    logo: synapse,
    link:
      "https://www.synapselifescience.com/network/synapse-finalists-1/imaginable-solutions ",
    alt_img_text: "Synapse logo",
    date: "January 2020",
    place: <h3>Finalist</h3>,
    body: "2020 Synapse Life Sciences Competition",
  },

  {
    logo: universitas,
    link:
      "https://dailynews.mcmaster.ca/articles/mcmaster-student-wins-prestigious-global-innovation-award/",
    alt_img_text: "RISE logo",
    date: "January 2020",
    place: <h3>Most Innovative</h3>,
    body: "Universities 21 RISE Global Competition ",
  },

  {
    logo: mmri,
    link:
      "https://www.eng.mcmaster.ca/mcmaster-manufacturing-research-institute-mmri#Our-Success-Stories-",
    alt_img_text: "Ontario Advanced Manufacturing Consortium logo",
    date: "December 2019",
    place: <h3>Success Story</h3>,
    body: "Featured by McMaster Manufacturing Research Institute",
  },

  {
    logo: innovation_factory,
    link: "https://innovationfactory.ca/",
    alt_img_text: "Innovation Factory logo",
    date: "October 2019",
    place: <h3>People's Choice</h3>,
    body: "Innovation Factory Pitch Night",
  },

  {
    logo: idea,
    link:
      "https://www.eng.mcmaster.ca/ibiomed/news/painting-tool-developed-mcmaster-ibiomed-students-wins-national-design-award-accessibility",
    alt_img_text: "IDEA logo",
    date: "October 2018",
    place: (
      <h3>
        1<sup>st</sup> Place
      </h3>
    ),

    body: "Innovative Design for Accessibility Student Competition",
  },
];
export default achievements;
