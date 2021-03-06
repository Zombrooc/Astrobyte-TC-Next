import React from "react";
import Link from 'next/link';

import AstrobyteLogo from "../../assets/site_astrobyte_logo.07b5c3a4.png";

import { Container } from "./styles";

function Footer() {
  return (
    <>
      <Container>
        <footer className="footer">
          <div className="footer__addr">
            <h2 className="footer__logo">
              <img src={AstrobyteLogo} alt="Astrobyte Logo" />
            </h2>
            <address>
              Astrobyte - Escola Técnica Profissionalizante LTDA.
              <br />
              CNPJ: 04.319.078/0001-24
            </address>
            <h2>Endereço</h2>
            <address>
              Rua Rui Barbosa, 15, Centro - Três Corações/MG <br />
              <a href="https://goo.gl/maps/Mxn5wMW1fS9CJrup7">Como chegar</a>
            </address>
            <h2>Contato</h2>
            <address>
              <a href="https://wa.me/+5535987073219">(35) 98707-3219</a> /
              3232-6848
            </address>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">Redes Sociais</h2>

              <ul className="nav__ul">
                <li>
                  <a href="https://www.facebook.com/astrobyte.centrodetreinamento">
                    Facebook
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/astrobyte_tc/">
                    Instagram
                  </a>
                </li>

                <li>
                  <a href="https://wa.me/5535987073219">WhatsApp</a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <h2 className="nav__title">Nossos cursos</h2>

              <ul className="nav__ul">
                <li>
                  <Link href="/courses/aesthetic">
                    <a>Estética</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/industry">
                    <a>Indústria</a>
                  </Link>
                </li>

                <li>
                  <Link href="/courses/it">
                    <a>Informática</a>
                  </Link>
                </li>

                <li>
                  <Link href="/courses/health">
                    <a>Saúde</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>
              <ul className="nav__ul">
                <li>
                  <a href="/termo-de-politica-e-privacidade.html">
                    Política de Privacidade
                  </a>
                </li>

                <li>
                  <a href="/termo-de-servico.html">Termos de Uso</a>
                </li>

                <li>
                  <a href="/sitemap.xml">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <div className="legal__links">
              <span>
                Desenvolvido por{" "}
                <a
                  href="https://thesimpletech.com.br/"
                  style={{ textDecoration: "underline" }}
                >
                  The Simple TECH
                </a>
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
