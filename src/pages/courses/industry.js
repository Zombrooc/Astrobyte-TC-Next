import React from "react";
import Head from "next/head";
import Link from 'next/link';

import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";

import { Container 
} from "../../styles/pages/courses/technology.styles";

export default function Industry() {
  return (
    <>
      <Head>
        <title>Astrobyte - Industria</title>
      </Head>
      <Navbar />
        <h1> Industria </h1>
      <Footer />
    </>
  );
}
