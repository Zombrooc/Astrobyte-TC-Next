import React from "react";
import Head from "next/head";
import Link from 'next/link';

import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";

import { Container 
} from "../../styles/pages/courses/technology.styles";

export default function Esthetics() {
  return (
    <>
      <Head>
        <title>Astrobyte - Estética</title>
      </Head>
      <Navbar />
        <h1> Estética </h1>
      <Footer />
    </>
  );
}
