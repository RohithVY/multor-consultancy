import React from "react";
import { highlights } from "./data/data";

const Highlights = () => {
  return (
    <div className="highlights">
      {highlights.map((highlit) => {
        return (
          <div className="highlight__text__container" key={highlit.id}>
            <img
              src={highlit.logo}
              alt="highlights image"
              className="highlights__img"
            />
            <span className="highlights__des__container">
              <h3 className="highlight__title">{highlit.title}</h3>
              <p className="highlights__des">{highlit.description}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
