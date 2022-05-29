import "../App.css";
import { Link } from "react-router-dom";
import componente from"./componente.css";

function ComponenteNav2() {
  return (
    <>
      <nav className="nav">
        <div className="navbar-menu ">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
            <img alt="lar" style={{ width: "40px" }} src={"./lar.png"}></img>
            </Link>
            <Link className="navbar-item" to="/usuario">
            <img alt="usuario" style={{ width: "40px" }} src={"./usuario.png"}></img>
              
            </Link>
            <Link className="navbar-item" to="/receitas">
            <img alt="receitas" style={{ width: "40px" }} src={"./receitas.png"}></img>
            </Link>
            <Link className="navbar-item" to="/despesas">
            <img alt="despesas" style={{ width: "40px" }} src={"./despesas.png"}></img>
            </Link>
            <div className="navbar-end"  style={{ width: "1250px" }}>
            <Link className="navbar-item" to="/login">
            <img alt="logout" style={{ width: "40px" }} src={"./logout.png"}></img>
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComponenteNav2;