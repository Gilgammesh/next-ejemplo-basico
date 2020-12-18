import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";

const Index = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Proyecto de NextJs - Inicio</title>
      </Head>
      <h1 style={{ color: "#563D7C" }}>Página de Inicio</h1>
      <hr />
      <Users users={users} />
    </Container>
  );
};

// Cargamos los datos o propiedades iniciales del componente (por ejemplo consumir una api)
//  getStaticProps  (uso para datos estáticos)
//  getServerSideProps  (uso para datos que cambian en cada request o petición)
export async function getStaticProps() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Index;
