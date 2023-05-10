// import Js from "../ribbons/js.png";
// import React from "../ribbons/react.png";
import SkillBoxes1 from "../ribbons/skillBoxes1.png";
import SkillBoxes2 from "../ribbons/skillBoxes2.png";

export default function Skills() {
  return (
    <div className="skills-mainbox">
      <div className="skill-elements">
        <div className="skill-title">
          <h2>Skills</h2>
        </div>
        <img src={SkillBoxes1} alt="skillboxes1" className="img1" />
        <img src={SkillBoxes2} alt="skillboxes2" className="img2" />
      </div>
    </div>
  );
}
