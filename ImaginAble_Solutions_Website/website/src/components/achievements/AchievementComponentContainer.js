import React from "react";
import achievements from "../../data/achievement_data";
import AchievementComponent from "./AchievementComponent";
import "./AchievementComponentContainer.css";

export default function AchievementComponentContainer() {
  return (
    <div className="achievements-scroll">
      <div className="achievements-scroll-container">
        {achievements.map((item, index) => {
          return (
            <AchievementComponent
              link={item.link}
              logo={item.logo}
              alt_img_text={item.alt_img_text}
              date={item.date}
              place={item.place}
              body={item.body}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
