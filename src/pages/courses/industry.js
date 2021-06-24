import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import { Container } from "../../styles/pages/courses/index.styles";

function industry() {
  return (
    <>
      <Head>
        <title> Industria - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Industria </h1>
        <hr />
        <p>
          Cursos de curta duração para você aprender as funções básicas de uma
          profissão, se qualificar para o mercado de trabalho ou evoluir na
          carreira.
        </p>
        <p>
          Saúde é uma área incrível para trabalhar. Os cursos da área de saúde
          estão sempre figurando entre os mais procurados pelos estudantes. Isso
          acontece porque eles costumam oferecer certa estabilidade financeira e
          realização pessoal.
        </p>
        <p>
          A vantagem de escolher nossos crusos na área da saúde é que eles são
          consideravelmente mais curtos do que uma graduação, com duração entre
          um ano e meio e dois anos, e têm foco no mercado de trabalho.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Operador de Empilhadeira</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 20 Horas - Curso dias de sábado e domingo
                  </small>
                </p>
                <p
                  className="card-text"
                  style={{
                    color: "var(--color-success)",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  Vagas Abertas
                </p>
                <p className="card-text">
                  Ao término deste curso você estará apto a operar a
                  empilhadeira com segurança e eficiência, possuindo assim os
                  conhecimentos sobre o funcionamento e manutenção da
                  empilhadeira e técnicas do correto manuseio da máquina.
                </p>
              </div>
              <a
                href="https://wa.me/5535987073219"
                className="card-footer callToAction"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <h1>
            {" "}
            Entre em contato conosco e inicie uma nova jornada na sua carreira
          </h1>
          <br />
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default industry;
