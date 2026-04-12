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
  <button
    className="back-btn"
    onClick={() => navigate("/")}
  >
     home
  </button>
</header>
      <h1>Mwana</h1>
      <Card title="Entrar">
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="example@gmail.com" />
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="password" type="password" />
  <a href="/forgot-password" className="forgot-password">Esqueci a senha</a>
        <button id="entrar-btn">Entrar</button>
          <a href="/signup" className="signup-link" >Não tens conta? <span style={{ color: "#e57373" }}>Seja um Mwana</span></a>
      </Card>

    </div>
  )
}