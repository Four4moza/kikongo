import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Perfil.css";

export default function Perfil() {
  const [nome, setNome] = useState("Formoza Manuel");
  const [email, setEmail] = useState("formozamanuel@email.com");
  const [idioma, setIdioma] = useState("Kikongo");
  const [editando, setEditando] = useState(false);

  return (
    <div className="perfil-layout">
      <Sidebar />

      <main className="perfil-content">
        <div className="perfil">
          <div className="perfil__header">
            <h1 className="perfil__title">Perfil</h1>
            <p className="perfil__subtitle">
              Gerencie as suas informações pessoais
            </p>
          </div>

          <div className="perfil__card">
            <div className="perfil__avatar-row">
              <div className="perfil__avatar">
                {nome
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div className="perfil__avatar-info">
                <span className="perfil__avatar-name">{nome}</span>
                <span className="perfil__avatar-email">{email}</span>
              </div>

              <button
                className="perfil__edit-btn"
                onClick={() => setEditando(!editando)}
              >
                {editando ? "Cancelar" : "Editar"}
              </button>
            </div>

            <div className="perfil__divider"></div>

            <div className="perfil__fields">
              <div className="perfil__field">
                <label>Nome completo</label>

                {editando ? (
                  <input
                    className="perfil__input"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                ) : (
                  <span className="perfil__value">{nome}</span>
                )}
              </div>

              <div className="perfil__field">
                <label>Email</label>

                {editando ? (
                  <input
                    className="perfil__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <span className="perfil__value">{email}</span>
                )}
              </div>

              <div className="perfil__field">
                <label>Idioma</label>

                {editando ? (
                  <select
                    className="perfil__input"
                    value={idioma}
                    onChange={(e) => setIdioma(e.target.value)}
                  >
                    <option>Kikongo</option>
                    <option>Kimbundu</option>
                    <option>Umbundu</option>
                    <option>Tchokwe</option>
                  </select>
                ) : (
                  <span className="perfil__badge">{idioma}</span>
                )}
              </div>
            </div>

            {editando && (
              <button
                className="perfil__save-btn"
                onClick={() => setEditando(false)}
              >
                Salvar alterações
              </button>
            )}
          </div>

          <div className="perfil__stats">
            <div className="perfil__stat-card">
              <h2>47</h2>
              <p>Palavras aprendidas</p>
            </div>

            <div className="perfil__stat-card">
              <h2>5</h2>
              <p>Favoritos</p>
            </div>

            <div className="perfil__stat-card">
              <h2>12</h2>
              <p>Lições concluídas</p>
            </div>
          </div>

          <div className="perfil__actions">
            <button className="perfil__action-btn">
              Alterar senha
            </button>

            <button className="perfil__action-btn danger">
              Terminar sessão
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}