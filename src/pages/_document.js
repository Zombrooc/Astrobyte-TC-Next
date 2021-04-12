import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
          <meta name="description" content="Astrobyte, cursos profissionalizantes que capacitam você a entrar no mercado de trabalho. Comece já sua jornada." />

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
            content="https://astrobyte-tc.vercel.app/images/Astrobyte%20-%20Banner.jpg"
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
            content="https://astrobyte-tc.vercel.app/images/Astrobyte%20-%20Banner.jpg"
          />
          <meta name="theme-color" content="#1e73be" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}
