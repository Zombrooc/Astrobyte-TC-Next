import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaUser,
  FaAward,
  FaCertificate,
  FaTerminal,
  FaPills,
  FaBolt,
  FaVials,
  FaHardHat,
  FaTools,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import office from "../assets/office.svg";
import heart from "../assets/heart.svg";
import factory from "../assets/factory.svg";
import massage from "../assets/massage.png";

import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import {
  CourseCard,
  MainBlock,
  Title,
  Achivements,
  AchivementsItems,
  CallToAction,
  Block,
  BlockTitle,
  Courses,
  CourseItem,
} from "../styles/pages/home.styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Astrobyte - Centro de Treinamento</title>
      </Head>
      <Navbar />

      <MainBlock>
        <Title className="Left-Side">
          <h1>
            <strong> Seu futuro começa aqui!</strong>{" "}
          </h1>
          <p>
            Conheça nossa escola e inicie sua jornada no mercado de trabalho com
            o melhor do ensino profissionalizante. Esteja preparado para atuar
            nas mais diversas área.
          </p>
          <ScrollLink to="mostWanted" spy={true} smooth={true} duration={800}>
            <CallToAction>Iniciar jornada</CallToAction>
          </ScrollLink>
        </Title>
        {/* <Block className="Right-Side"> */}
        <div className="Right-Side">
          <div
            style={{
              width: "80%",
              padding: "20px",
              borderRadius: "17px",
              background: "var(--color-light)",
              marginTop: "65px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              {" "}
              <strong>Garanta já sua vaga </strong>
            </h3>
            <hr />
            <ContactForm style={{ background: "var(--color-light)" }} />
          </div>
          {/* <AchivementsItems>
            <FaUser />
            Mais de 40000 alunos formados desde sua inauguração
          </AchivementsItems>
          <AchivementsItems>
            <FaAward />
            Prêmio Top of Mind 2019 - Associação Comercial de Três Corações
          </AchivementsItems>
          <AchivementsItems>
            <FaCertificate />
            Certificação reconhecida no Brasil inteiro
          </AchivementsItems> */}
          {/* </Block> */}
        </div>
      </MainBlock>
      <Block id="mostWanted">
        <BlockTitle>
          <span> Cursos mais procurados </span>
        </BlockTitle>
        <Courses>
          <CourseItem gridArea="FirstCourse">
            <Link href="/courses/it">
              <a>
                <FaTerminal />
                <span> Informática </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="SecondCourse">
            <Link href="/courses/health">
              <a>
                <FaPills />
                <span>Atendente de Farmácia </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="ThirdCourse">
            <Link href="/courses/industry">
              <a>
                <FaBolt />
                <span> Elétrica </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="FourthyCourse">
            <Link href="/courses/health">
              <a>
                <FaVials />
                <span> Auxiliar de Análises Laboratoriais </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="FiftyCourse">
            <Link href="/courses/nrs">
              <a>
                <FaHardHat />
                <span> Normas Regulamentadoras </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="SixthyCourse">
            <Link href="/courses/industry">
              <a>
                <FaTools />
                <span> Eletromecânica </span>
              </a>
            </Link>
          </CourseItem>
        </Courses>
      </Block>
      <Block id="allCourses">
        <BlockTitle>
          <span> Nossos Cursos </span>
        </BlockTitle>
        <br />
        <Link href="/courses/it">
          <a>
            <CourseCard>
              <div>
                <div>
                  <h2> Informática </h2>
                  <p>
                    Para que um computador atenda com eficiência às necessidades
                    básicas dos usuários, é essencial aprender a usar um pacote
                    de programas. Os cursos de informática fornecem recursos
                    básicos e avançados de uma forma muito educacional,
                    permitindo que você use sistemas operacionais, crie
                    documentos e monte planilhas inteligentes.
                  </p>
                  <br />
                </div>
                <div className="image">
                  <img src={office} alt="Microsoft Office" />
                </div>
              </div>
            </CourseCard>
          </a>
        </Link>
        <Link href="/courses/health">
          <a>
            <CourseCard>
              <div>
                <div className="image">
                  <img src={heart} alt="Coração" />
                </div>
                <div>
                  <h2> Saúde </h2>
                  <p>
                    O mercado de trabalho dos profissionais de saúde continua em
                    expansão graças ao surgimento de novos exames, diagnósticos,
                    medicamentos, tratamentos, clínicas e hospitais. Portanto,
                    se você está interessado nesta área, saiba que pode escolher
                    um curso no qual você pode entrar no mercado de trabalha na
                    área de drogarias e farmácias, laboratórios, atendimento
                    direto ao paciente, gestão e muito mais.
                  </p>
                  <br />
                </div>
              </div>
            </CourseCard>
          </a>
        </Link>
        <Link href="/courses/industry">
          <a>
            <CourseCard>
              <div>
                <div>
                  <h2> Industria </h2>
                  <p>
                    Quem deseja ingressar rapidamente no mercado de trabalho
                    encontra alternativas interessantes com o auxílio de cursos
                    de qualificação profissional. Nossos cursos têm como
                    objetivo prepará-lo para ocupar cargos operacionais em vagas
                    na indústria relacionadas ao campo de produção. Desta forma,
                    os módulos do curso são organizados para fornecer aos alunos
                    conhecimentos específicos e relacionados à área.
                  </p>
                  <br />
                </div>
                <div className="image">
                  <img src={factory} alt="Industria" />
                </div>
              </div>
            </CourseCard>
          </a>
        </Link>
        <Link href="/courses/aesthetic">
          <a>
            <CourseCard>
              <div>
                <div className="image">
                  <img src={massage} alt="Estética" />
                </div>
                <div>
                  <h2> Estética </h2>

                  <p>
                    O curso de Estética forma profissionais especializados em
                    beleza e bem-estar. Ao final do curso, você estará preparada
                    para atuar no tratamento e embelezamento da face, corpo e
                    cabelos. No mercado de trabalho, o esteticista pode atuar em
                    salões de beleza, centros de estética, clínicas, academias,
                    SPAs, resorts, indústrias, centros médicos e hotéis.
                  </p>
                  <br />
                </div>
              </div>
            </CourseCard>
          </a>
        </Link>
      </Block>
      <Block>
        <h2> Entrar em contato </h2>
        <hr />
        <ContactForm />
      </Block>

      <Footer />
    </>
  );
}
