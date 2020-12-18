import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";

const UserProfile = ({ user }) => {
  const { data } = user;
  const size = 300;
  return (
    <Container>
      <Head>
        <title>Proyecto de NextJs - Perfil de Usuario</title>
      </Head>
      <h2>Perfil</h2>
      <hr />
      <div className="card" style={{ width: "350px" }}>
        <Image
          src={data.avatar}
          width={size}
          height={size}
          className="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">
            {data.id} - {data.first_name}
          </h5>
          <p className="card-text">{data.last_name}</p>
          <p className="card-text">{data.email}</p>
        </div>
      </div>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserProfile;
