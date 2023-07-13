import React from "react";
import { individualTestimonials } from "./data/data";

const Testimonials = () => {
  return (
    <div className="testimonials__wrapper">
      <span className="testimonials__header">
        DON'T JUST TAKE OUR WORD FOR IT
      </span>
      <div className="card__wrapper">
        {individualTestimonials.map((testimonial) => {
          return (
            <div className="card__container" key={testimonial.id}>
              <img
                src={testimonial.rating}
                alt="⭐⭐⭐⭐⭐"
                className="testimonial__rating"
              />
              <p>{testimonial.message}</p>
              <div className="testimonial__user">
                <img src={testimonial.image} alt="" className="user" />
                <span className="test__userdetails">
                  <div>{testimonial.name} </div>
                  <div>{testimonial.location}</div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
