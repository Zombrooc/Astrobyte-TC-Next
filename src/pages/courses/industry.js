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
          Quem deseja ingressar rapidamente no mercado de trabalho encontra
          alternativas interessantes com o auxílio de cursos de qualificação
          profissional. Nossos cursos têm como objetivo prepará-lo para ocupar
          cargos operacionais em vagas na indústria relacionadas ao campo de
          produção. Desta forma, os módulos do curso são organizados para
          fornecer aos alunos conhecimentos específicos e relacionados à área.
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Elétrica Residencial e Predial</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 60 Horas - 6 Meses
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
                  O curso de Eletricista Predial tem por objetivo o
                  desenvolvimento de compêtencias relativas a principíos e leis
                  que regem o funcionamento de instalações elétricas
                  residenciais, públicas, comerciais por meio de instrumentos,
                  ferramentas, procedimentos e métodos que permitam o
                  planejamento, execução e avaliação das instalações e suas
                  proteções.
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
                <h5 className="card-title">Elétrica Industrial</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 60 Horas - 6 Meses
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
                  No Curso de Elétrica Industrial, você se prepara para montar e
                  manter instalações elétricas de baixa tensão e sistemas
                  elétricos de máquinas e equipamentos. Para isso, além de
                  instalar equipamentos, componentes e materiais e controladores
                  lógicos, você também aprenderá a explicar esquemas e
                  diagramas, realizar levantamento de carga e montar quadros de
                  distribuição de energia e quadros de controle.
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
                <h5 className="card-title">Mecânica Industrial</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 60 Horas - 6 Meses
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
                  O curso de Mecânica Industrial tem como objetivo prepará-lo
                  para as vagas da indústria em funções operacionais
                  relacionadas ao campo da produção. Desta forma, os módulos do
                  curso são organizados para fornecer aos alunos conhecimentos
                  específicos relacionados à metrologia, tecnologia mecânica,
                  leitura e interpretação de desenhos.
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
                <h5 className="card-title">Eletromecânica</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 190 Horas - 1 ano e 9 meseses
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
                  Neste curso, você vai adquirir conhecimentos sobre o
                  funcionamento dos sistemas eletromecânicos. Isso significa
                  compreender a instalação, montagem e manutenção de sistemas e
                  máquinas e seus componentes e peças. Com ele, você poderá
                  atuar em diversos setores da indústria.
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
                  Operador de Pá Carragadeira e Retroescavadeira
                </h5>
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
                  Curso estruturado para aperfeiçoamento profissional do
                  operador de Retroescavadeira nas atividades/atribuições de
                  realizar as operações de movimentação de materiais, cobertura
                  de valas, corte, regularização, aterro, desmatamento,
                  destocamento, utilizando a retroescavadeira e seus acessórios,
                  atendendo aos requisitos de Qualidade, Segurança, Meio
                  Ambiente e Saúde para o segmento de construção, montagem e
                  terraplanagem
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
