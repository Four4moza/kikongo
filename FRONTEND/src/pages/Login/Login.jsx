import Card from "../../components/Card/Card"
import "./Login.css"
import { useNavigate } from "react-router-dom"

 export default function Login() {
    const navigate = useNavigate();
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fffbfb",
      flexDirection: "column",
    }}>
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

      <Card title="Entrar">
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="example@gmail.com" />
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="password" type="password" />
  <a href="/forgot-password" className="forgot-password">Esqueceu a senha? Redefinir</a>
        <button id="entrar-btn">Entrar</button>
          <a href="/signup" className="signup-link" >Não tens conta? <span style={{ color: "#e57373" }}>Seja um Mwana</span></a>
      </Card>

    </div>
  )
}