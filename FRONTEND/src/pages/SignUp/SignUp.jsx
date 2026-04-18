import Card from "../../components/Card/Card"
import "./Signup.css"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()

  return (
    <div>

      <header className="top-header">
         <div className="logo">
          <span className="mwana">Mwana</span>
        </div>
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          home
        </button>
      </header>

      
      <div className="signup-page">

        <h1 className="signup-logo">Seja um </h1>
        <span className="mwana">Mwana</span>

        <Card title="Sign Up">

          <label htmlFor="name">Nome</label>
          <input id="name" placeholder="Teu nome" />

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="example@gmail.com" />

          <label htmlFor="password">Palavra-passe</label>
          <input id="password" type="password" placeholder="palavra-passe" />

          <label htmlFor="confirm">Confirmar Palavra-passe</label>
          <input id="confirm" type="password" placeholder="confirmar palavra-passe" />

          <button>Criar conta</button>

          <p className="signup-footer">
            Já tens conta? <a href="/login">Entrar</a>
          </p>

        </Card>

      </div>

    </div>
  )
}