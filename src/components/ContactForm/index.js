import React, { useState } from "react";
import axios from "axios";

import { Container, SuccessMessage } from "./styles";

function ContactForm() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
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
      .post("https://formcarry.com/s/P-SoS6LArny", contactFormData, {
        headers: { Accept: "application/json" },
      })
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
    <Container>
      <SuccessMessage
        style={{ display: showSuccessMessage ? "block" : "none" }}
      >
        <span className="closebtn" onClick={() => setShowSuccessMessage(false)}>
          &times;
        </span>
        <strong>Sucesso!</strong> Recebemos sua mensagem e em breve entraremos
        em contato com você.
      </SuccessMessage>
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
    </Container>
  );
}

export default ContactForm;
