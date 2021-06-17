import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container, CourseCard } from "../../styles/pages/courses/index.styles";

function health() {
  return (
    <>
      <Head>
        <title> Saúde - Astrobyte</title>
      </Head>
      <Navbar />

      <Container>
        <h1> Saúde </h1>
        <p>
          Você se interessa pelos cursos na área da saúde, mas fica na dúvida
          sobre qual escolher? Existem algumas carreiras que têm um mercado
          aquecido, ou seja, vai se dar bem trabalhando no setor público e
          privado.
        </p>
        <p>
          Saúde é uma área incrível para trabalhar. Primeiro, porque oferece um
          campo bastante diverso de atuação, com cursos tão diferentes quanto
          você possa imaginar.
        </p>
        <br />
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

export default health;
