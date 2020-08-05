import React from "react";
import elissa from "../assets/images/elissa_modal.jpg";
import lianna_machining from "../assets/images/lianna_machining.jpg";
import guided_hands_painting from "../assets/images/gh-paint.png";

const our_story = {
  our_story: (
    <div>
      <div className="image-text-wrapper">
        <img src={elissa} align="right" alt="Lianna and Elissa" />
        <p>
          My journey began in 2017 when I met Elissa, a woman living with primary generalized dystonia. She experiences
          involuntary curling of her fingers, hand and arm fatigue, and limited hand mobility, making holding and using
          writing utensils impossible. Before her condition worsened, she was a talented painter but now, she cannot
          grasp a paintbrush. This was a devastating emotional loss that stripped away her passion and creativity.
          Hearing Elissa’s story inspired me to create the first prototype of Guided Hands&trade; in my first year at
          McMaster University. <br />
        </p>
      </div>

      <p>
        <br /> Fuelled by the passion from my project, I decided to continue my innovation journey in the summer of
        2019. I became an undergraduate researcher at McMaster Manufacturing Research Institute. Supported by a strong
        network of professional engineers and machinists, I applied my hands-on skills to redesign, manufacture and
        invent Guided Hand&trade;. <br />
      </p>
      <br />

      <img src={lianna_machining} align="left" alt="Lianna Machining" />

      <p>
        Immediately, I introduced Guided Hands&trade; to over 150 patients and medical professionals in hospital
        clinics, rehabilitation centres, nursing homes and retirement homes. I worked alongside patients to get their
        input on the design to ensure that all of their needs were met. Guided Hands&trade; had given the patients hope
        and happiness as they painted, wrote, coloured and played games on an iPad. The patients had said that Guided
        Hands™ gave them back their freedom of expression and enhanced their quality of life. As well, Elissa’s passion
        was reignited as she was finally able to do what she loves once again.
      </p>
      <img src={guided_hands_painting} align="right" alt="Guided Hands In Use" />

      <p>
        <br /> Inspiration struck again in August 2019 when Dr. Mark Tarnopolsky, Division Head of the Neuromuscular and
        Neurometabolic Disorders Clinic at McMaster Children’s Hospital, invited me to join Bella, a 12-year-old girl
        living with Cerebral Palsy at her doctor’s appointment. Armed with paint supplies, I introduced Guided Hands™ to
        her and as soon as she began painting, a smile of true joy spread across her face. She turned to her mom and
        said, “Mom I want one” and her mom turned to me and asked, “How much is it?”. At that point, the thought of
        selling Guided Hands™ had never even crossed my mind. However, with the passion and drive to help more people, I
        created ImaginAble Solutions.
        <br />
        <br />
        Today, my team and I continue to grow our company to enable people like Elissa and Bella to live the life they
        had always imagined!
      </p>
    </div>
  ),
};

export default our_story;
