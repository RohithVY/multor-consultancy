import React from "react";
import { features } from "./data/data";

const Features = () => {
  return (
    <div className="features__wrapper">
      {features.map((feature) => {
        return (
          <div className="feature__container" key={feature.id}>
            <img src={feature.image} alt="Image" className="feature__img" />
            <h3>{feature.heading}</h3>
            <p>{feature.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
