import "../App.css";
import { Link } from "react-router-dom";
import componente from"./componente.css";

function ComponenteNav() {
  return (
    <>
     <div className='nav'>
      <nav className="navbar is-transparent">
        <div className="navbar-menu ">
          <div className="navbar-start">
          
            <Link  to="/" style={{ width: "110px" }}>
                  
            </Link>
            <Link className="navbar-item" to="/" style={{ width: "90px" }}>
              HOME
            </Link>
            
            <Link className="navbar-item" to="/receitas" style={{ width: "110px" }}>
              RECEITAS
            </Link>
            <Link className="navbar-item" to="/despesas">
              DESPESAS
            </Link>
            <Link className="navbar-item" to="/" style={{ width: "100px" }}>
              SALDO
            </Link>
            <Link className="navbar-item" to="/usuario" style={{ width: "100px" }}>
              USUÁRIO
            </Link>
            <div className="navbar-end"  style={{ width: "900px" }}>
            <Link className="navbar-item" to="/login">
              LOGOUT
            </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default ComponenteNav;