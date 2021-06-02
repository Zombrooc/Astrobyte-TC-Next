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

import Navbar from "../components/Navbar";
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
          <h2> A única jornada impossível é aquela que você nunca começa </h2>
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
            <Link href="/courses/technology">
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
            <Link href="/courses/industry">
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

        <CourseCard>
          <div>
            <div>
              <h2> Informática </h2>
              <p>
                Para que um computador atenda com eficiência às necessidades
                básicas dos usuários, é essencial aprender a usar um pacote de
                programas. Os cursos de informática fornecem recursos básicos e
                avançados de uma forma muito educacional, permitindo que você
                use sistemas operacionais, crie documentos e monte planilhas
                inteligentes.
              </p>
              <br />
            </div>
            <div className="image">
              <img src={office} alt="Microsoft Office" />
            </div>
          </div>
        </CourseCard>
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
                medicamentos, tratamentos, clínicas e hospitais. Portanto, se
                você está interessado nesta área, saiba que pode escolher um
                curso no qual você pode lidar com atendimento direto ao
                paciente, gestão, ensino, pesquisa ou empreendedorismo nesta
                área.
              </p>
              <br />
            </div>
          </div>
        </CourseCard>
        <CourseCard>
          <div>
            <div>
              <h2> Industria </h2>
              <p>
                Quem deseja ingressar rapidamente no mercado de trabalho
                encontra alternativas interessantes com o auxílio de cursos de
                qualificação profissional. Nossos cursos têm como objetivo
                prepará-lo para ocupar cargos operacionais em vagas na indústria
                relacionadas ao campo de produção. Desta forma, os módulos do
                curso são organizados para fornecer aos alunos conhecimentos
                específicos relacionados à metrologia, tecnologia mecânica,
                leitura e interpretação de desenhos.
              </p>
              <br />
            </div>
            <div className="image">
              <img src={factory} alt="Industria" />
            </div>
          </div>
        </CourseCard>

        {/* <Container>
          <div>
            <div>
              <h2> Informática </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
              <br />
            </div>
            <div>
              <img
                src="https://static.invenglobal.com/upload/image/2020/08/13/o1597361719998783.jpeg"
                alt="Computador"
              />
            </div>
          </div>
          <div>
            <div>
              <img
                src={scienticResearch}
                alt="Computador"
              />
            </div>
            <div>
              <h2> Saúde </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </div>
          </div>
        </Container> */}
      </Block>

      <Footer />
    </>
  );
}
