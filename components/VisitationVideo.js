import React from "react";
import meeting from "../assets/meeting.webp";

const VisitationVideo = () => {
  return (
    <div className="visit__wrapper">
      <h2 className="visit__header">
        Here is a glimpse of what you're signing up for
      </h2>
      <p className="visit__para">
        To get a flavour of our sessions and the awe-inspiring effects they
        could have, view this image from one of our transformative sessions. Get
        ready to be motivated and enthused about what you're about to embark on!
      </p>
      <img src={meeting} alt="meeting_image" className="visit__img" />
    </div>
  );
};

export default VisitationVideo;
