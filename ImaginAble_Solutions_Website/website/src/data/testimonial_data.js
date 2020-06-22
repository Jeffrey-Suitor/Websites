import React from "react";

import elissa from "../assets/images/elissa.png";
import tarnopolsky from "../assets/images/tarnopolsky.png";
import mesterman from "../assets/images/mesterman.png";
import sam from "../assets/images/sam.png";
import goran from "../assets/images/goran.png";
import remilli from "../assets/images/remilli.png"

const testimonials = [
  {
    img: elissa,
    alt_img_text: "Photo of Lianna and Elissa",
    body: (
      <p>
        "I was elated that I finally had a device that would allow me to paint with ease, a hobby I had given up due to
        shaking and posturing in my dominant hand. Guided Hands&trade; had given me the freedom to do the things I loved
        from painting to playing games on my iPad."
      </p>
    ),
    about: (
      <div>
        <p className="testimonials_about_name">Elissa</p>
        <p>Student with Dystonia</p>
      </div>
    ),
    button: "Read More",
    hear_more: (
      <p>
        "As a 38-year-old woman who has lived with Primary Generalized Dystonia for the majority of my life, it was an
        honour to be part of the design process for Guided Hands&trade;. <br />
        <br />
        I was elated that I finally had a device that would allow me to paint with ease, a hobby I had given up due to
        shaking and posturing in my dominant hand. Guided Hands&trade; has given me the freedom to do the things I loved
        – from painting to playing games on my iPad. Guided Hands&trade; has also made many aspects of my life easier
        and more enjoyable!
        <br />
        <br />
        During the design, ImaginAble Solutions ensured that the handpiece was fit well for me and listened to any
        comment I had regarding comfortability and ease of use. ImaginAble Solutions was professional, caring, and
        considerate of my needs.
        <br />
        <br />
        ImaginAble Solutions will help so many people and truly change lives for the better. "
      </p>
    ),
  },

  {
    img: tarnopolsky,
    alt_img_text: "Photo of Dr. Tarnopolsky",
    body: (
      <p>“Our patient with severe Dystonia derived real benefit and clear joy from the use of Guided Hands&trade;.”</p>
    ),
    about: (
      <div>
        <a href="https://fhs.mcmaster.ca/pediatrics/mark_tarnopolsky.html">
          <p className="testimonials_about_name">Dr. Mark Tarnopolsky</p>
        </a>
        <p>
          Hamilton Health Sciences
          <br />
          Medical &amp; Business Advisor for ImaginAble Solutions
        </p>
      </div>
    ),

    button: "Read More",
    hear_more: (
      <p>
        Dr. Tarnopolsky has adopted Guided Hands&trade; into the Neuromuscular Disease Clinic at McMaster Children’s
        Hospital. His patient, a 12-year-old girl living with Dystonia uses Guided Hands&trade; during her math and art
        classes.
      </p>
    ),
  },

  {
    img: sam,
    alt_img_text: "Photo of Sam",
    body: (
      <p>
        "If this device was available right when I began rehabilitation it would’ve helped me so much. Great device,
        definitely makes rehabilitating more fun and easier!"
      </p>
    ),

    about: (
      <div>
        <p className="testimonials_about_name">Sam</p>
        <p>Student recovering from a C6 spinal cord injury</p>
      </div>
    ),

    button: false,
  },

  /*
  {
    img: mesterman,
    alt_img_text: "McMaster Children's Hospital Logo",
    body: (
      <p>
Dr. Mesterman will be leading a formal research study with her patients at McMaster Children’s Hospital and the Ron Joyce Children’s Health Centre
      </p>
    ),
    about: (
      <div>
        <p className="testimonials_about_name">Dr. Ronit Mesterman</p>
        <p>
          Hamilton Health Scienecs
          <br />
          Research &amp; Medical Advisor for ImaginAble Solutions
        </p>
      </div>
    ),

    button: "Read More",
    hear_more: (
      <p>
        “Guided Hands&trade; is opening wonderful opportunities for increased participation in fun activities.” <br />
        <br />
        Dr. Mesterman will be conducting a formal research study with her patient at McMaster Children’s Hospital and
        the Ron Joyce Children’s Health Centre.
      </p>
    ),
  },
*/
  {
    img: remilli,
    alt_img_text: "Photo of  Steve Remilli",
    body: (
      <p>
        “Our team of experts supported ImaginAble Solutions as they created Guided Hands&trade; , ensuring that the
        product is fully capable of meeting customer needs. We are excited to continue to support such an impactful
        company that is making real changes to improve our community.”
      </p>
    ),

    about: (
      <div>
        <p className="testimonials_about_name">Steve Remilli, P.Eng</p>
        <p>
          McMaster Manufacturing Research Institute <br />
          Manufacturing Advisor for ImaginAble Solutions
        </p>
      </div>
    ),

    button: "Read More",
    hear_more: (
      <p>
        “The McMaster Manufacturing Research Institute is an advanced engineering group committed to solving industry
        problems faced by leaders in the manufacturing world. The MMRI’s world-class facilities allow our experienced
        staff to take on new challenges and provide results. <br />
        <br />
        Our team of experts supported ImaginAble Solutions as they created Guided Hands&trade; , ensuring that the product
        is fully capable of meeting customer needs. The MMRI team and advisors that worked alongside ImaginAble
        Solutions to bring their product to the market are delighted with the company’s continued success. We are
        excited to continue to support such an impactful company that is making real changes to improve our community by
        providing individuals with a higher quality of life.”
      </p>
    ),
  },

  {
    img: goran,
    alt_img_text: "Photo of Dr. Calic",
    body: (
      <p>
        “My research explores factors that make new ventures more innovative. I believe Guided Hands&trade; will make a
        positive difference for many people.”
      </p>
    ),

    about: (
      <div>
        <a href="https://experts.mcmaster.ca/display/calicg">
          <p className="testimonials_about_name">Dr. Goran Calic</p>
        </a>
        <p>
          DeGroote School of Business <br />
          Assistant Professor
        </p>
      </div>
    ),

    button: "Read More",
    hear_more: (
      <p>
        "I am an Assistant Professor of Strategic Management and Information Systems at McMaster University’s DeGroote
        School of Business. My research explores factors that make new ventures more innovative. In studying thousands
        of new ventures, my collaborators and I consistently find that ventures seeking to help others are not just more
        innovative, but generally outperform their peers on a number of economic metrics. <br />
        <br />
        Guided Hands&trade; has all of the characteristics of these highly performing and innovative young ventures. And
        Lianna, Guided Hands’&trade; passionate founder, has all of the characteristics of an inventor who has what it
        takes to make her venture succeed. I believe Guided Hands&trade; will make a positive difference for many
        people."
      </p>
    ),
  },
];

export default testimonials;
