import React, { useState } from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  // const form = useRef();
  const servicID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_Ex81MdCrM9Nfw4btC1trj";

  const onSubmit = (data, r) => {
    sendEmail(
      servicID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (servicID, templateID, variables, userID) => {
    emailjs
      .send(servicID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form set seuucessfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.log(`Something went wrong ${err}`));
  };

  return (
    <div className="contacts text-center">
      <div className="text-center">
        <h1>Contact me</h1>
        <p className="text-center">
          Please fill out the form and I'll contact you as soon as possible
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={register({
                  required: "Plerase enter your name",
                  maxLength: {
                    value: 30,
                    message: "Your name should be less than 30 characters",
                  },
                })}
              />
              <div className="line"></div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* Phone Input */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>

              {/* Email Input */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>

              {/* Subject Input */}
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Desription */}
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="text"
                name="description"
              />
              <div className="line"></div>

              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
