import React from "react";

import AstrobyteLogo from "../../assets/site_astrobyte_logo.07b5c3a4.png";

import { Container } from "./styles";

function Footer() {
  return (
    <>
      <Container>
        <footer className="footer">
          <div className="footer__addr">
            <h1 className="footer__logo">
              <img src={AstrobyteLogo} alt="Astrobyte Logo" />
            </h1>
            <address>
              Astrobyte - Escola Técnica Profissionalizante LTDA.
              <br/>CNPJ: 04.319.078/0001-24

            </address>
            <h2>Endereço</h2>
            <address>
              Rua Rui Barbosa, 15, Centro - Três Corações/MG <br />
              <a href="https://goo.gl/maps/Mxn5wMW1fS9CJrup7">Como chegar</a>
            </address>
            <h2>Contato</h2>
            <address>
              <a href="https://wa.me/+5535987073215">(35) 98707-3215</a> /
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
                  <a href="https://wa.me/+5535987073215">WhatsApp</a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <h2 className="nav__title">Nossos cursos</h2>

              <ul className="nav__ul">
                <li>
                  <a href="https://wa.me/+5535987073215">Estética</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/astrobyte.centrodetreinamento">
                    Indústria
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/astrobyte_tc/">
                    Informática
                  </a>
                </li>

                <li>
                  <a href="https://wa.me/+5535987073215">Saúde</a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>
              <ul className="nav__ul">
                <li>
                  <a href="https://google.com" disabled>
                    Política de Privacidade
                  </a>
                </li>

                <li>
                  <a href="https://google.com" disabled>
                    Termos de Uso
                  </a>
                </li>

                <li>
                  <a href="https://google.com" disabled>
                    Sitemap
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <div className="legal__links">
              <span>
                Developed by: {"\u003c\u003e"} The Simple TECH{" "}
                {"\u003c\u002f\u003e"}
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
