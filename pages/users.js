import Head from "next/head";
import Container from "../components/Container";
import User from "../components/User";

const Users = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Proyecto de NextJs - Usuarios</title>
      </Head>
      <h1 style={{ color: "#563D7C" }}>Página de Usuarios</h1>
      <hr />
      <div className="mt-2">
        <h3>
          Lista de Usuarios
          <span className="badge badge-danger ml-1">{users.per_page}</span>
        </h3>
        <div className="row row-cols-2 row-cols-md-3 mt-3">
          {users.data.map((ele) => {
            return <User key={ele.id} user={ele} />;
          })}
        </div>
      </div>
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

export default Users;
