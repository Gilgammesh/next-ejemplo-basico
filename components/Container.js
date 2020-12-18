import Head from "next/head";
import Navigation from "./Navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Proyecto de NextJs</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navigation />
      <div className="container-fluid mt-2">{props.children}</div>
    </div>
  );
};

export default Container;
