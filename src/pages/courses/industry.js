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
                    Carga horária: 130 Horas - 1 ano e 3 meses
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
                <h5 className="card-title">NR10 - Área Classificada</h5>
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
                  Neste curso você aprenderá os principais temas que a norma NR
                  10 abrange, desde os cuidados e riscos que a eletricidade
                  possui (como os arcos elétricos), como também os tipos de
                  choques e inclusive todas as medidas de controle de risco
                  elétricos existentes. Com certeza, um curso que será bem
                  proveitoso para o seu currículo.
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
                  NR18 - Segurança e Saúde na Construção Cívil
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
                  Esse curso tem como objetivo habilitar e capacitar os
                  trabalhadores da Indútria da Contrução, seguindo as
                  regulamentações contidas na NR18 e melhores práticas
                  existentes, a fim de prevenir a ocorrência de acidentes no
                  decorrer da execução de suas atividades.
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
                  NR33 - Segurança em Trabalhos Confinados
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
                  Esse curso te mostrará quais são os requisitos mínimos para
                  identificação de espaços confinados e o reconhecimento,
                  avaliação, monitoramento, e controle dos riscos existentes de
                  forma a garantir permanentemente a segurança e saúde dos
                  trabalhadores que interagem direta ou indiretamente nestes
                  espaços.
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
                <h5 className="card-title">NR35 - Trabalho em Altura</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 08 Horas - Curso dias de sábado e domingo
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
                  Esse curso te mostrará quais são os requisitos mínimos de
                  proteção para o trabalho em altura, envolvendo o planejamento,
                  a organização e a execução. Ou seja, ela garante a segurança e
                  a saúde dos trabalhadores envolvidos direta ou indiretamente
                  com trabalhos em altura.
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
                  Operador de Pá Carragedeira e Retroescavadeira
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
