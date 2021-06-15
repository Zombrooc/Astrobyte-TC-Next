import React from "react";
import Head from "next/head";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import { Container } from "../styles/pages/contact.styles.js";

function ContactPage() {
  return (
    <>
      <Head>
        <title> Entrar em contato  - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1 style={{ width: "100%", marginLeft: "16px" }}>
          {" "}
          Entre em contato conosco
        </h1>
        <div>
          <ContactForm />
        </div>
        <div className="sm">
          <a
            href="https://www.facebook.com/astrobyte.centrodetreinamento"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://www.instagram.com/astrobyte_tc/"
            className="fa fa-instagram"
          ></a>
          <a href="https://wa.me/5535987073215" className="fa fa-whatsapp"></a>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
