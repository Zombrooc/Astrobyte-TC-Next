import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import { Container } from "../../styles/pages/courses/index.styles";

function it() {
  return (
    <>
      <Head>
        <title> Informática - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Informática </h1>
        <hr />
        <p>
          Ter os conhecimentos básicos em informática é fundamental para
          qualquer um, já que a tecnologia está intrinsecamente em nosso
          dia-a-dia. Hoje, é possível fazer quase tudo através de um computador
          e, quem não sabe nem como acessar a internet – porque, acredite, tem
          gente que ainda não sabe – com certeza ficará para trás.
        </p>
        <p>
          Conhecer o computador e seu sistema operacional, desde ligar e criar
          pastas na área de trabalho até às funções um pouco mais complexas;
          aprender a digitar de forma correta e, aos poucos, de forma mais ágil;
          acessar a internet; conhecer e utilizar alguns programas do pacote
          Office (Word, Power Point, Excel), esses são alguns dos assuntos que
          são abordados num curso de informática básica e são, sem dúvidas, de
          extrema importância para dar o pontapé inicial nesse universo da
          informação e tecnologia. A importância do curso de informática está
          relacionada principalmente com a necessidade que o mercado de trabalho
          tem de pessoas que saibam como manusear um computador e suas funções.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Informática Básica</h5>
                    <hr />
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 65 Horas - 5 Meses
                      </small>
                      <br />
                      <small className="text-muted">
                        Prof: Elian Valdez V. L. Gonçalo
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
                      Aprenda o essencial na área de informática para ingressar
                      no mercado de trabalho. Windows, Word, PowerPoint, Excel
                      são os elementos que irão compor o seu currículo.
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
                    <h5 className="card-title">Informática Avançada</h5>
                    <hr />
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 70 Horas - 7 Meses
                      </small>
                      <br />
                      <small className="text-muted">
                        Prof: Elian Valdez V. L. Gonçalo
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
                      Aprenda sobre Design Gráfico e se torne um designer
                      profissional. Photoshop CC e CorelDraw serão as suas
                      ferramentas nessa jornada.
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
                    <h5 className="card-title">Excel Avançado</h5>
                    <hr />
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária: 30 Horas - 3 Meses
                      </small>
                      <br />
                      <small className="text-muted">
                        Prof: Elian Valdez V. L. Gonçalo
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
                      Aprenda mais sobre essa poderosa ferramenta que é o Excel,
                      crie suas próprias funções, trabalhe com banco de dados,
                      tabelas dinâmicas e muito mais.
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
                    <h5 className="card-title">Capacitação 1° emprego</h5>
                    <hr />
                    <p className="card-text">
                      <small className="text-muted">
                        Carga horária mínima: 60 Horas - 6 Meses
                      </small>
                      <br />
                      <small className="text-muted">
                        Prof: Elian Valdez V. L. Gonçalo
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
                      Aprenda mais sobre essa poderosa ferramenta que é o Excel,
                      crie suas próprias funções, trabalhe com banco de dados,
                      tabelas dinâmicas e muito mais.
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
          <br />
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default it;
