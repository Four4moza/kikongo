import "./Main.css"
import { Link } from "react-router-dom"

function Main() {
  return (
    <div className="main">

      
      <header className="navbar">

        <div className="logo">
          <span>Mwana</span>
        </div>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="btn-login">
              entrar
            </button>
          </Link>

          <Link to="/signup">
            <button className="btn-signup">
              cadastrar
            </button>
          </Link>

        </div>

      </header>


      <div className="hero">

        <h1>
          Aprenda a falar <span>kikongo</span>
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
  )
}

export default Main