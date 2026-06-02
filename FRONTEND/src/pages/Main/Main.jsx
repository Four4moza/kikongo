import "./Main.css";
import { Link } from "react-router-dom";
import logo from "../../assets/palanca-negra-rosa.png";

function Main() {
  return (
    <div className="main">

      <header className="navbar">

        <div className="logo">
          <img src={logo} alt="Logo" />
          <span className="mwana">Mwana</span>
        <div className="nav-buttons">

          <Link to="/login" className="btn-login">
            Entrar
          </Link>

          <Link to="/signup" className="btn-signup">
            Registrar
          </Link>

        </div>
        </div>


      </header>

      <div className="hero">

        <h1>
          Aprenda a falar <span className="philosopher-bold-italic">kikongo</span>
        </h1>

        <p>
          Conecte-se com as suas raízes Bakongo através do Kikongo, preserve e valorize a cultura Angolana.
        </p>

        <Link to="/login">
          <button className="btn-start">
            começar →
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Main;