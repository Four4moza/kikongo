import "./LessonCard.css";

export default function LessonCard({
  title,
  progress,
  icon,
  color
}) {

  return (
    <div className="card">

      <div className="card-header">

        <div className={`icon ${color}`}>
          {icon}
        </div>

        <h3>{title}</h3>

      </div>

      <div className="progress-section">

        <div className="progress-info">
          <span>Progresso</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      <div className="buttons">

        <button className="btn-primary">
          Continuar
        </button>

        <button className="btn-outline">
          Quizz
        </button>

      </div>

    </div>
  );
}