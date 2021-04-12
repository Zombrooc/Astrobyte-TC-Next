import React from "react";
import Head from "next/head";
import Link from 'next/link';
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
import { Accordion, Card } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

import {
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
          <h1> A única jornada impossível é aquela que você nunca começa </h1>
          <p>
            Conheça nossa escola e inicie sua jornada no mercado de trabalho com
            o melhor do ensino profissionalizante
          </p>
          <ScrollLink to="mostWanted" spy={true} smooth={true} duration={800}>
            <CallToAction>Iniciar jornada</CallToAction>
          </ScrollLink>
        </Title>
        <Achivements className="Right-Side">
          <AchivementsItems>
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
          </AchivementsItems>
        </Achivements>
      </MainBlock>
      <Block id="mostWanted">
        <BlockTitle>
          <span> Cursos mais procurados </span>
        </BlockTitle>

        <Courses>
          <CourseItem gridArea="FirstCourse">
            <Link href="/cursos/informatica">
              <a>
                <FaTerminal />
                <span> Informática </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="SecondCourse">
            <Link href="/">
              <a>
                <FaPills />
                <span>Atendente de Farmácia </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="ThirdCourse">
            <Link href="/">
              <a>
                <FaBolt />
                <span> Elétrica </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="FourthyCourse">
            <Link href="/">
              <a>
                <FaVials />
                <span> Auxiliar de Análises Laboratoriais </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="FiftyCourse">
            <Link href="/">
              <a>
                <FaHardHat />
                <span> Normas Regulamentadoras </span>
              </a>
            </Link>
          </CourseItem>
          <CourseItem gridArea="SixthyCourse">
            <Link href="/">
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
        <Accordion className="coursesAccordion">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{ cursor: "pointer" }}
            >
              Informática
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Link href="/">
                  <a>Informática Básica </a>
                </Link>
                <Link href="/">
                  <a>Informática Avançada </a>
                </Link>
                <Link href="/">
                  <a>Informática Básica + Avançada </a>
                </Link>
                <Link href="/">
                  <a>CorelDraw </a>
                </Link>
                <Link href="/">
                  <a>Excel </a>
                </Link>
                <Link href="/">
                  <a>Excel Avançado </a>
                </Link>
                <Link href="/">
                  <a>Internet </a>
                </Link>
                <Link href="/">
                  <a>Photoshop </a>
                </Link>
                <Link href="/">
                  <a>PowerPoint </a>
                </Link>
                <Link href="/">
                  <a>Windows </a>
                </Link>
                <Link href="/">
                  <a>Word </a>
                </Link>
                <Link href="/">
                  <a>Terceira Idade </a>
                </Link>
                <Link href="/">
                  <a>Digitação </a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              style={{ cursor: "pointer" }}
            >
              Estética
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Link href="/">
                  <a>Auto Maquiagem</a>
                </Link>
                <Link href="/">
                  <a>Cab. Masculino</a>
                </Link>
                <Link href="/">
                  <a>Cab. Feminino</a>
                </Link>
                <Link href="/">
                  <a>Depilação</a>
                </Link>
                <Link href="/">
                  <a>Design de Sobrancelhas</a>
                </Link>
                <Link href="/">
                  <a>Desenho Masculino</a>
                </Link>
                <Link href="/">
                  <a>Limpeza de Pele</a>
                </Link>
                <Link href="/">
                  <a>Manicure com Decoração</a>
                </Link>
                <Link href="/">
                  <a>Maquiagem</a>
                </Link>
                <Link href="/">
                  <a>Massagem</a>
                </Link>
                <Link href="/">
                  <a>Unha em gel Acrigel</a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="2"
              style={{ cursor: "pointer" }}
            >
              Industria
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Link href="/">
                  <a> Operador de Empilhadeira </a>
                </Link>
                <Link href="/">
                  <a> Elétrica Residencial + Industrial + NR10 + NR35 </a>
                </Link>
                <Link href="/">
                  <a> Elétrica Industrial + NR10 </a>
                </Link>
                <Link href="/">
                  <a> Elétrica Industrial + Res </a>
                </Link>
                <Link href="/">
                  <a> Elétrica Residencial </a>
                </Link>
                <Link href="/">
                  <a>
                    Eletromecânica 4x1 + Metrologia + Mecânica + Elétrica
                    Industrial + NR35
                  </a>
                </Link>
                <Link href="/">
                  <a> Metrologia + Mecânica </a>
                </Link>
                <Link href="/">
                  <a> NR10 </a>
                </Link>
                <Link href="/">
                  <a> NR35 </a>
                </Link>
                <Link href="/">
                  <a> Pá Carregadeira + Retro </a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="3"
              style={{ cursor: "pointer" }}
            >
              Saúde
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Link href="/">
                  <a>Atendente de Farmácia </a>
                </Link>
                <Link href="/">
                  <a>Auxiliar de Saúde Bucal </a>
                </Link>
                <Link href="/">
                  <a>Cuidador de Idosos </a>
                </Link>
                <Link href="/">
                  <a>Lab. de Análises Clínicas </a>
                </Link>
                <Link href="/">
                  <a>Manipulação </a>
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Block>

      <Footer />
    </>
  );
}
