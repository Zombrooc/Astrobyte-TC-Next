import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import { Container } from "../../styles/pages/courses/index.styles";

function health() {
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
          Você se interessa pelos cursos na área da saúde, mas fica na dúvida
          sobre qual escolher? Existem algumas carreiras que têm um mercado
          aquecido, ou seja, vai se dar bem trabalhando no setor público e
          privado.
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
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Auxiliar de laboratório e análises clínicas
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 80 Horas - 8 Meses
                      </small>
                    </p>
                    <p
                      className="card-text"
                      style={{
                        color: "var(--color-attention)",
                        fontSize: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      Vagas Limitadas
                    </p>
                    <p className="card-text">
                      Auxiliar de laboratório e análises clínicas é o curso que
                      ajudará você a entrar na área da saúde e se destacar no
                      mercado de trabalho.
                    </p>
                    <a
                      href="https://wa.me/5535987073219"
                      style={{
                        background: "var(--color-info)",
                        padding: "10px",
                        textAlign: "center",
                        color: "var(--color-light)",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      Fazer minha incrição agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Atendente de farmácia com Injetáveis (ATF)
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 80 Horas - 8 Meses
                      </small>
                    </p>
                    <p
                      className="card-text"
                      style={{
                        color: "var(--color-attention)",
                        fontSize: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      Vagas Limitas
                    </p>
                    <p className="card-text">
                      Nesse curso você irá desenvolver suas habilidades pessoais
                      e terá treinamentos diferenciados para aumentar os
                      conhecimentos teóricos e práticos na área.
                    </p>
                    <a
                      href="https://wa.me/5535987073219"
                      style={{
                        background: "var(--color-info)",
                        padding: "10px",
                        textAlign: "center",
                        color: "var(--color-light)",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      Fazer minha incrição agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Auxiliar de Saúde Bucal (ASB){" "}
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 300 Horas
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
                      O Curso Auxiliar em Saúde Bucal da Astrobyte, habilita e
                      qualifica a exercer funções de suporte clínico ao
                      dentista, secretariado e gestão.
                    </p>
                    <a
                      href="https://wa.me/5535987073219"
                      style={{
                        background: "var(--color-info)",
                        padding: "10px",
                        textAlign: "center",
                        color: "var(--color-light)",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      Fazer minha incrição agora
                    </a>
                  </div>
                </div>
              </div>
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
          <br/>
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default health;
