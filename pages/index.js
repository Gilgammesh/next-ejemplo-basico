import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";

const Index = () => {
  return (
    <Container>
      <Head>
        <title>Proyecto de NextJs - Inicio</title>
      </Head>
      <h1 style={{ color: "#563D7C" }}>Página de Inicio de NEXT .js</h1>
      <hr />
      <Image
        src="https://nextjsnews.com/newsletters/2020-08-27/top.png"
        width="1200"
        height="600"
        layout="fixed"
      />
    </Container>
  );
};

export default Index;
