import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { CenterBox, Container } from "../styles/pages/404";

export default function custom404() {

  const router = useRouter();

  return (
    <Container>
      <Head>
        <title> 404 </title>
      </Head>

      <CenterBox>
        <div className="f-modal-alert">
          <div className="f-modal-icon f-modal-warning scaleWarning">
            <span className="f-modal-body pulseWarningIns"></span>
            <span className="f-modal-dot pulseWarningIns"></span>
          </div>
        </div>
        <p> Infelizmente essa página ainda está em construção.</p>
        <p>
          Mas em breve aqui terá mais cursos para alavancar sua carreira
          profissional.
        </p>
        <br />
        <button onClick={() => router.push("/")}>Voltar para o ínicio</button>
      </CenterBox>
    </Container>
  );
}
