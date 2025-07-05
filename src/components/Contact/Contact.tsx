"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ToasterSoonerSuccess from "../Toaser/ToasterSoonerSuccess";
import ToasterSoonerError from "../Toaser/ToasterSoonerError";
import ContactSecctionUI from "./ContactSecctionUI";
const Contact = () => {
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.valueOf().trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const errors = {
      name: name ? "" : "Name is required",
      email:
        email && /\S+@\S+\.\S+/.test(email) ? "" : "Valid email is required",
      message: message ? "" : "Message is required",
    };

    setFormErrors(errors);
    const hasError = Object.values(errors).some(Boolean);
    if (hasError) {
      ToasterSoonerError("please fill all inputs");
      return;
    }

    emailjs
      .sendForm(
        "service_wpj3h2h",
        "template_pl7w544",
        form,
        "N8QOaMTCSmtvL_LmE"
      )
      .then(() => {
        form.reset();
        ToasterSoonerSuccess(
          "message sent to Hassan Alhossiny waiting response"
        );
      })
      .catch(() => {
        ToasterSoonerSuccess(
          "network issue , please check your connection internet"
        );
      });
  };

  return (
    <ContactSecctionUI formErrors={formErrors} handleSubmit={handleSubmit} />
  );
};

export default Contact;
