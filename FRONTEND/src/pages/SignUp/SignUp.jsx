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
          sair→
        </button>
      </header>

      
      <div className="signup-page">  

        <Card title="Criar conta">

          <label htmlFor="name">Nome</label>
          <input id="name" placeholder="Teu nome" />

          <label htmlFor="email">Email</label>
          <input id="email" placeholder="example@gmail.com" />

          <label htmlFor="password">Palavra-passe</label>
          <input id="password" type="password" placeholder="palavra-passe" />

          <label htmlFor="confirm">Confirmar Palavra-passe</label>
          <input id="confirm" type="password" placeholder="confirmar palavra-passe" />

          <button className="btn-signup">Criar conta</button>

          <p className="signup-footer">
            Já és um Mwana? <a href="/login">Entrar</a>
          </p>

        </Card>

      </div>

    </div>
  )
}