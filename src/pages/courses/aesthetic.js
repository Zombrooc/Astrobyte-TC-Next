import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import { Container } from "../../styles/pages/courses/index.styles";

function aesthetic() {
  return (
    <>
      <Head>
        <title> Estética - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Estética </h1>
        <hr />
        <p>
          Para quem quer empreender, abrir o seu próprio negócio no ramo da
          beleza, o Astrobyte traz várias opções. Como as mulheres sempre são
          muito vaidosas e os homens também vem aderindo a procedimentos
          estéticos, essa é uma área que está sempre em alta.
        </p>
        <p>
          Os cursos foram desenvolvidos a partir das necessidades das empresas e
          por isso nossos alunos conseguem se destacar suprindo a demanda do
          mercado de trabalho.
        </p>
        <p>
          Com atividades práticas e teóricas, nossos alunos estarão preparados
          para atuar no mercado após sua formação ou até mesmo abrir seu próprio
          empreendimento na área.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Curso de Depilação</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 52 Horas - 4 Meses
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
                  Fazer um curso de Depilação pode lhe render emprego em
                  diversos lugares, como salões de beleza, SPAs, clínicas de
                  estética, entre muitos outros, então investir seu tempo neste
                  aprendizado pode lhe beneficiar bastante.
                </p>
                <p>
                  O setor da beleza cresce a cada ano, pois as pessoas nunca
                  deixam de investir em si mesmas, por isso esta pode ser uma
                  área excelente.
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
                <h5 className="card-title">Design de Sobrancelhas</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 40 Horas - 4 Meses
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
                  Com o curso de Design de Sobrancelhas, aprenda a corrigir e
                  desenhar sobrancelhas usando técnicas de medição facial. Com
                  as nossas instrutoras, você aprenderá a identificar o design
                  ideal para cada formato de rosto, modelar sobrancelhas
                  masculinas e combinar a cor dos pelos com a pele. Dê o toque
                  especial no rosto de seus clientes trabalhando em casa ou em
                  salões de beleza.
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
                <h5 className="card-title"> Cabeleireiro Masculino </h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 52 Horas - 4 Meses
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
                  Cortar um cabelo curto não é tão fácil quanto parece, mas com
                  a ajuda de nossos experientes instrutores você terá a
                  oportunidade de desenvolver as melhores técnicas para deixar
                  os seus clientes muito satisfeitos. Este curso além de ensinar
                  design de corte masculino, projeta o profissional cabeleireiro
                  no segmento de Barbearia, com o exercício de técnicas
                  clássicas nos cuidados com a barba.
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
                <h5 className="card-title"> Auto Maquiagem </h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 2,5 Horas - 1 Dia
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
                  No Curso de Automaquiagem você aprenderá na prática a
                  maquiagem ideal para o dia a dia, para trabalhar e para a
                  noite (com sombra preta), além de receber dicas personalizadas
                  e truques para os diferentes tipos de rosto e pele. Aprenda a
                  utilizar e higienizar corretamente os pincéis de maquiagem.
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
                <h5 className="card-title"> Massagem </h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 50 Horas - 5 Meses
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
                  Capacite-se para poder realizar massagens relaxantes. Com o
                  curso, você terá conhecimento amplo nas mais variadas técnicas
                  usadas, sobre anatomia muscular, benefícios dessa atividade,
                  alongamentos, indicações e contraindicações e muito mais.
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
                <h5 className="card-title"> Maquiagem </h5>
                <p className="card-text">
                  <small className="text-muted">
                    Carga horária: 50 Horas - 5 Meses
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
                  A maquiagem pode ser considerada uma ferramenta para exaltar a
                  beleza, aumentar a autoestima e disfarçar as imperfeições.
                  Além de seu caráter estético, as maquiagens atuais possuem
                  também a função protetora, com os mais modernos produtos que
                  protegem a pele e evitam o envelhecimento precoce.Com este
                  curso de maquiagem você aprenderá todos os principais
                  conhecimentos dessa arte.
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
                <h5 className="card-title"> Manicure com Decoração </h5>
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
                  Aqui você aprende os cuidados que você deve ter com diferentes
                  tipos e formatos das unhas de mãos e pés. Aprenda tudo sobre
                  os instrumentos, as normas de higiene e segurança da profissão
                  e como fazer a cutilagem, esmaltar e cuidar da beleza das mãos
                  e pés de homens e mulheres.
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

export default aesthetic;
