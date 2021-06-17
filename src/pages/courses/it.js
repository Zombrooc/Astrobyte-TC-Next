import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container, CourseCard } from "../../styles/pages/courses/index.styles";

function it() {
  return (
    <>
      <Head>
        <title> Informática - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Informática </h1>
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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <CourseCard>
            <div>
              <h2> Informática Básica </h2>
              <strong>Carga horária: 65 Horas - 5 Meses</strong>
            </div>

            <div>
              <h3> Módulos: </h3>
              <ul>
                <li> Windows 10 (Sistema Operacional)</li>
                <li> Internet </li>
                <li>
                  Pacote Office
                  <ul>
                    <li> Word (Edição de Texto)</li>
                    <li> PowerPoint (Criação de Slides)</li>
                    <li> Excel (Planilhas Eletrônicas)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="CtA">
              <a href="https://wa.me/5535988777750"> Saiba Mais </a>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <h2> Informática Avançada </h2>
              <strong>Carga horária: 70 Horas - 7 Meses</strong>
            </div>

            <div>
              <h3> Módulos: </h3>
              <ul>
                <li> Digitação </li>
                <li>
                  Design Gráfico
                  <ul>
                    <li> Photoshop (Edição de Imagens)</li>
                    <li> CorelDraw (Desenhos Vetoriais)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="CtA">
              <a href="https://wa.me/5535988777750"> Saiba Mais </a>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <h2> Excel Avançado </h2>
              <strong>Carga horária: 30 Horas - 3 Meses</strong>
            </div>

            <div>
              <h3> Módulos: </h3>
              <ul>
                <li> Funções Financeiras </li>
                <li> Funções Matemáticas </li>
                <li> VBA Básico </li>
                <li> Funções de Pesquisa </li>
                <li> Tabelas Dinâmicas</li>
                <li> Microsoft Access </li>
              </ul>
            </div>
            <div className="CtA">
              <a href="https://wa.me/5535988777750"> Saiba Mais </a>
            </div>
          </CourseCard>
          <CourseCard>
            <div>
              <h2> Capacitação 1° Emprego </h2>
              <strong>Carga horária: Horas - 3 Meses</strong>
            </div>

            <div>
              <h3> Módulos: </h3>
              <ul>
                <li> Windows 10 (Sistema Operacional)</li>
                <li> Internet </li>
                <li>
                  Pacote Office
                  <ul>
                    <li> Word (Edição de Texto)</li>
                    <li> PowerPoint (Criação de Slides)</li>
                    <li> Excel (Planilhas Eletrônicas)</li>
                  </ul>
                </li>
                <li>Auxiliar Administrativo</li>
              </ul>
            </div>
            <div className="CtA">
              <a href="https://wa.me/5535988777750"> Saiba Mais </a>
            </div>
          </CourseCard>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default it;
