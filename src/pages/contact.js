import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "../components/Navbar";

import { Container, SuccessMessage } from "../styles/pages/contact.styles.js";

function ContactPage() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const resetForm = () => {
    setContactFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    });
  };

  const handleInput = (event) => {
    setContactFormData({
      ...contactFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "https://formcarry.com/s/P-SoS6LArny",
        contactFormData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setShowSuccessMessage(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();

    resetForm();
  };

  return (
    <>
      <Head>
        <title> Entrar em contato </title>
      </Head>
      <Navbar />

      <SuccessMessage
        style={{ display: showSuccessMessage ? "block" : "none" }}
      >
        <span className="closebtn" onClick={() => setShowSuccessMessage(false)}>
          &times;
        </span>
        <strong>Sucesso!</strong> Recebemos sua mensagem e em breve entraremos
        em contato com você.
      </SuccessMessage>
      <Container>
        <h1 style={{ width: "100%", marginLeft: "16px" }}>
          {" "}
          Entre em contato conosco
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name"> Nome </label>
              <input
                name="name"
                onChange={handleInput}
                value={contactFormData.name}
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email"> E-mail </label>
              <input
                name="email"
                type="email"
                onChange={handleInput}
                value={contactFormData.email}
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email"> WhatsApp </label>
              <input
                name="whatsapp"
                type="text"
                onChange={handleInput}
                value={contactFormData.whatsapp}
                placeholder="Digite seu número de WhatsApp"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message"> Mensagem </label>
              <textarea
                name="message"
                type="text"
                onChange={handleInput}
                value={contactFormData.message}
                placeholder="Digite sua mensagem"
                required
              />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
        <div className="sm">
          <a href="https://www.facebook.com/astrobyte.centrodetreinamento">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/astrobyte_tc/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/+5535987073215">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </Container>
    </>
  );
}

export default ContactPage;
