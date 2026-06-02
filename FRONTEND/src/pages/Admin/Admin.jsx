import "./Admin.css";

export default function Admin() {
  const alunos = [
    { nome: "Ana Luísa", progresso: 92, licoes: 18, favoritos: 12 },
    { nome: "Carlos Manuel", progresso: 74, licoes: 13, favoritos: 7 },
    { nome: "João Pedro", progresso: 56, licoes: 8, favoritos: 4 },
    { nome: "Maria Rosa", progresso: 88, licoes: 16, favoritos: 9 },
  ];

  const conteudos = [
    { titulo: "Saudações em Kikongo", categoria: "Básico", status: "Publicado" },
    { titulo: "Família", categoria: "Vocabulário", status: "Publicado" },
    { titulo: "Números", categoria: "Básico", status: "Rascunho" },
  ];

  return (
    <div className="admin">

      <div className="admin-header">
        <h1>Painel Administrativo</h1>
        <p>Gerencie alunos, conteúdos e acompanhe o desempenho da plataforma.</p>
      </div>

      <div className="admin-stats">

        <div className="stat-card">
          <span className="stat-number">1.248</span>
          <span className="stat-label">Alunos</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">89</span>
          <span className="stat-label">Lições</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">96%</span>
          <span className="stat-label">Taxa de Conclusão</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">15.2k</span>
          <span className="stat-label">Palavras Aprendidas</span>
        </div>

      </div>

      <div className="admin-grid">

        <div className="admin-card">
          <div className="card-header">
            <h2>Desempenho dos Alunos</h2>
            <button>Ver todos</button>
          </div>

          <div className="students-list">
            {alunos.map((aluno) => (
              <div className="student-row" key={aluno.nome}>
                <div>
                  <h4>{aluno.nome}</h4>
                  <span>{aluno.licoes} lições concluídas</span>
                </div>

                <div className="student-progress">
                  <span>{aluno.progresso}%</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${aluno.progresso}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h2>Conteúdos</h2>
            <button>+ Novo Conteúdo</button>
          </div>

          <div className="content-list">
            {conteudos.map((item) => (
              <div className="content-item" key={item.titulo}>
                <div>
                  <h4>{item.titulo}</h4>
                  <span>{item.categoria}</span>
                </div>

                <div className="content-actions">
                  <span className="status">{item.status}</span>

                  <button className="edit-btn">
                    Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="admin-card">

        <div className="card-header">
          <h2>Monitoramento da Plataforma</h2>
        </div>

        <div className="monitor-grid">

          <div className="monitor-card">
            <span>Usuários Online</span>
            <h3>326</h3>
          </div>

          <div className="monitor-card">
            <span>Novos Registros Hoje</span>
            <h3>48</h3>
          </div>

          <div className="monitor-card">
            <span>Exercícios Concluídos</span>
            <h3>1.932</h3>
          </div>

          <div className="monitor-card">
            <span>Tempo Médio</span>
            <h3>24 min</h3>
          </div>

        </div>

      </div>

    </div>
  );
}