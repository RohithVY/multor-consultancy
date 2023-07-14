import React from "react";
import Highlights from "./Highlights";

const Form = () => {
  return (
    <div className="highlights__wrapper">
      <Highlights />
      <div className="form__container">
        <h3 className="form__heading">Schedule an Appointment</h3>
        <span className="form__para">
          When you complete our form, you will receive a confirmation email with
          the details of your appointment.
        </span>
        <input type="text" placeholder="First Name*" className="form__inp" />
        <input
          type="text"
          className="form__inp"
          placeholder="Last Name*"
          required
        />
        <input
          type="text"
          className="form__inp"
          placeholder="Email*"
          required
        />
        <input
          type="text"
          className="form__inp"
          placeholder="Phone*"
          required
        />
        <select name="dropdown" className="form__inp" id="form__dropdown">
          {/* <option value="Type of Appointment">Type of Appointment</option> */}
          <option value="Video Consultation">Video Consultation</option>
          <option value="Personal Appointment">Personal Appointment</option>
          <option value="Chat With Us">Chat With Us</option>
        </select>
        <button className="form__btn">Schedule Now</button>
      </div>
    </div>
  );
};

export default Form;
