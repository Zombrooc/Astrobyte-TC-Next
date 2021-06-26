import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <meta name="title" content="Astrobyte - Centro de Treinamento" />
          <meta
            name="description"
            content="Astrobyte, cursos profissionalizantes que capacitam você a entrar no mercado de trabalho. Comece já sua jornada."
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/images/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#1e73be"
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta
            name="msapplication-TileImage"
            content="/images/mstile-144x144.png"
          />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://astrobytetc.com.br/" />
          <meta
            property="og:title"
            content="Astrobyte - Centro de Treinamento"
          />
          <meta
            property="og:description"
            content="Astrobyte, cursos profissionalizantes que capacitam você a entrar no mercado de trabalho. Comece já sua jornada."
          />
          <meta
            property="og:image"
            content="https://astrobytetc.com.br/images/Astrobyte%20-%20Banner.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://astrobytetc.com.br/" />
          <meta
            property="twitter:title"
            content="Astrobyte - Centro de Treinamento"
          />
          <meta
            property="twitter:description"
            content="Astrobyte, cursos profissionalizantes que capacitam você a entrar no mercado de trabalho. Comece já sua jornada."
          />
          <meta
            property="twitter:image"
            content="https://astrobytetc.com.br/images/Astrobyte%20-%20Banner.jpg"
          />
          <meta name="theme-color" content="#1e73be" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <a href="https://wa.me/5535987073219" className="whatsAppButton">
            <IoLogoWhatsapp />
          </a>
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
            integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}
