import React from "react";
import face from "../assets/bussiness.face.jpg";

const About = () => {
  return (
    <div className="about__wrapper">
      <img src={face} alt="Image" className="about__img" />
      <span className="about__desc">
        <div className="about__header">ABOUT</div>
        <div className="about__title">Innovative Solutions Consulting</div>
        <div className="about__description">
          Innovative Solutions Consulting offers expert theme consulting and
          guidance, helping businesses create captivating brand experiences that
          resonate with their target audience and drive growth. Our strategic
          approach and creative expertise ensure memorable and impactful themes
          for events, campaigns, and overall brand positioning.
        </div>
      </span>
    </div>
  );
};

export default About;
