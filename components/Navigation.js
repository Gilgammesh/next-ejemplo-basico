import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navigation = () => {
  const router = useRouter();

  const activeLink = (href) => {
    return router.pathname === href ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">
          <Image
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={`nav-item ${activeLink("/")}`}>
            <Link href="/">
              <a className="nav-link">Inicio</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink("/about")}`}>
            <Link href="/about">
              <a className="nav-link">Acerca de</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink("/services")}`}>
            <Link href="/services">
              <a className="nav-link">Servicios</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink("/users")}`}>
            <Link href="/users">
              <a className="nav-link">Usuarios</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
