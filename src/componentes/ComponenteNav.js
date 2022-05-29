import "../App.css";
import { Link } from "react-router-dom";
import componente from "./componente.css";

function ComponenteNav() {
  return (
    <>
      {/* <div className='nav'> */}
      <nav className="navbar is-transparent" id='nav'>
        <div className="navbar-menu ">
          <div className="navbar-start">
            {/* <div className="navbar-brand">
              
            </div> */}
            <Link  to="/">
                <img alt="logo" style={{ width: "120px"}} src={"./navbar/logo.png"}></img>
              </Link>
            <Link  to="/">
            <img alt="home" style={{ width: "100px"}} src={"./navbar/home.png"}></img>
            </Link>

            <Link to="/receitas">
            <img alt="receita" style={{ width: "100px"}} src={"./navbar/receita.png"}></img>   
            </Link>

            <Link to="/despesas">
            <img alt="despesa" style={{ width: "100px"}} src={"./navbar/despesa.png"}></img>   
            </Link>

            <Link to="/">
            <img alt="saldo" style={{ width: "100px"}} src={"./navbar/saldo.png"}></img>   
            </Link>

            <Link to="/usuario">
            <img alt="usuario" style={{ width: "100px"}} src={"./navbar/usuario.png"}></img>   
            </Link>

            <Link to="/sobre">
            <img alt="quemSomos" style={{ width: "100px"}} src={"./navbar/sobre.png"}></img>   
            </Link>

            <div className="navbar-end" style={{ width: "620px" }}>
              <Link className="navbar-item" to="/login">
                <img alt="logout" style={{ width: "150px"}} src={"./navbar/logout.png"}></img>   
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComponenteNav;