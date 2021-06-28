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
        <title> Saúde - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Saúde </h1>
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
          A vantagem de escolher nossos cursos na área da saúde é que eles são
          consideravelmente mais curtos do que uma graduação, com duração entre
          um ano e meio e dois anos, e têm foco no mercado de trabalho.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Auxiliar de Laboratório e Análises Clínicas
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
              </div>
              <a
                href="https://wa.me/5535987073219"
                className="card-footer callToAction"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Atendente de Farmácia e Manipulação (ATF)
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
                  Nesse curso você irá desenvolver suas habilidades pessoais e
                  terá treinamentos diferenciados para aumentar os conhecimentos
                  teóricos e práticos na área.
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Auxiliar de Saúde Bucal (ASB) </h5>
                <p className="card-text">
                  <small className="text-muted">Carga horária: 300 Horas</small>
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
                  qualifica a exercer funções de suporte clínico ao dentista,
                  secretariado e gestão.
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Curso Auxiliar á Saúde e Cuidadores de Idosos
                </h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 160 Horas - 1 Ano e 6 Meses
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
                  Esse Curso trás o beneficio de aprender a cuidar de idosos e
                  pessoas dependentes fisicamente do outro. Você ira aprender
                  sobre alimentação, banho de leito, curativos, injetáveis
                  subcutâneas, aferir pressão, ate fisioterapia com recursos
                  caseiros, cuidados com medicamentos e outros. Aprendera como
                  lidar com o psicológico do paciente e o seu para ser um
                  cuidador.
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Auxiliar de Veterinário</h5>
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
                  Auxiliar Veterinário é uma formação completa voltada para área
                  clínica que prepara o aluno para trabalhar auxiliando o Médico
                  Veterinário. O aluno será capacitado para trabalhar em
                  hospitais, laboratórios ou clínicas veterinárias, além é claro
                  de poder empreender e abrir seu próprio negócio na área.
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Curso de Banho e Tosa</h5>
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
                  Os bichos de estimação estão, cada vez mais, sendo
                  considerados como membros da família, contribuindo para o
                  crescimento do mercado de higiene e estética de cães e gatos.
                  Portanto, para se alcançar um empreendimento de destaque é
                  preciso comprometimento e responsabilidade com os cuidados e
                  as necessidades exigidas por esses animais.
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

export default health;
