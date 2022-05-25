import "../App.css";
import { Link } from "react-router-dom";

function ComponenteNav() {
  return (
    <>
      <nav className="navbar is-dark has-shadow	">
        <div className="navbar-menu ">
          <div className="navbar-start">
            <div></div>
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/usuario">
              Usuario
            </Link>
            <Link className="navbar-item" to="/receitas">
              Receitas
            </Link>
            <Link className="navbar-item" to="/despesas">
              Despesas
            </Link>
            <div className="navbar-end">
            <Link className="navbar-item" to="/login">
              logout
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComponenteNav;